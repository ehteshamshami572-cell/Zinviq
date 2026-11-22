/**
 * Sliding Window In-Memory Rate Limiter
 * For edge environments, this can be swapped with Upstash Redis KV.
 */
interface RateLimitRecord {
  timestamps: number[];
}

class SlidingWindowRateLimiter {
  private store: Map<string, RateLimitRecord> = new Map();

  /**
   * Check if an IP address is within allowable request rate
   * @param key IP address or client identifier
   * @param maxRequests Maximum allowable requests in window
   * @param windowSeconds Window length in seconds
   */
  public async checkLimit(
    key: string,
    maxRequests: number = 5,
    windowSeconds: number = 600
  ): Promise<boolean> {
    const now = Date.now();
    const windowMs = windowSeconds * 1000;
    const threshold = now - windowMs;

    const record = this.store.get(key) || { timestamps: [] };

    // Discard timestamps older than threshold
    const validTimestamps = record.timestamps.filter((ts) => ts > threshold);

    if (validTimestamps.length >= maxRequests) {
      this.store.set(key, { timestamps: validTimestamps });
      return false;
    }

    validTimestamps.push(now);
    this.store.set(key, { timestamps: validTimestamps });
    return true;
  }
}

export const rateLimiter = new SlidingWindowRateLimiter();
