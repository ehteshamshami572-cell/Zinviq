/**
 * Persistent sliding-window rate limiting for serverless deployments.
 * Upstash REST is used in production; the in-memory store is dev-only.
 */

interface RateLimitRecord {
  timestamps: number[];
}

interface RateLimitOutcome {
  allowed: boolean;
  unavailable?: boolean;
}

class InMemoryRateLimiter {
  private store: Map<string, RateLimitRecord> = new Map();

  public async checkLimit(
    key: string,
    maxRequests: number = 5,
    windowSeconds: number = 600
  ): Promise<boolean> {
    const now = Date.now();
    const threshold = now - windowSeconds * 1000;

    // Prune stale keys so the map cannot grow without bound in warm dev processes.
    for (const [storedKey, record] of Array.from(this.store.entries())) {
      const valid = record.timestamps.filter((timestamp) => timestamp > threshold);
      if (valid.length === 0) {
        this.store.delete(storedKey);
      } else {
        this.store.set(storedKey, { timestamps: valid });
      }
    }

    const record = this.store.get(key) ?? { timestamps: [] };
    const validTimestamps = record.timestamps.filter((timestamp) => timestamp > threshold);

    if (validTimestamps.length >= maxRequests) {
      this.store.set(key, { timestamps: validTimestamps });
      return false;
    }

    validTimestamps.push(now);
    this.store.set(key, { timestamps: validTimestamps });
    return true;
  }
}

const inMemoryRateLimiter = new InMemoryRateLimiter();

export async function checkRateLimit(
  key: string,
  maxRequests: number = 5,
  windowSeconds: number = 600
): Promise<RateLimitOutcome> {
  const restUrl = process.env.UPSTASH_REDIS_REST_URL;
  const restToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!restUrl || !restToken) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[RATE_LIMIT] UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are required in production.');
      return { allowed: false, unavailable: true };
    }
    return { allowed: await inMemoryRateLimiter.checkLimit(key, maxRequests, windowSeconds) };
  }

  try {
    const redisKey = `zinviq:contact:${key}`;
    const response = await fetch(`${restUrl.replace(/\/$/, '')}/pipeline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${restToken}`,
      },
      body: JSON.stringify([
        ['INCR', redisKey],
        ['EXPIRE', redisKey, windowSeconds, 'NX'],
      ]),
    });

    if (!response.ok) {
      throw new Error(`Upstash responded with ${response.status}`);
    }

    const result = (await response.json()) as Array<{ result?: number | string | null }>;
    const rawCount = result?.[0]?.result;
    const count = typeof rawCount === 'number' ? rawCount : Number(rawCount);

    if (!Number.isFinite(count)) {
      throw new Error('Upstash returned an invalid INCR result');
    }

    return { allowed: count <= maxRequests };
  } catch (error) {
    console.error('[RATE_LIMIT_FAILED]', error);
    return { allowed: false, unavailable: true };
  }
}
