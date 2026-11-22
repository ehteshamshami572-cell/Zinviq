'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface UseApiMutationOptions<TData, TVariables> {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: string) => void;
}

interface UseApiMutationResult<TData, TVariables> {
  mutate: (variables: TVariables) => Promise<TData | null>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  data: TData | null;
  reset: () => void;
}

export function useApiMutation<TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables, signal: AbortSignal) => Promise<TData>,
  options: UseApiMutationOptions<TData, TVariables> = {}
): UseApiMutationResult<TData, TVariables> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsSuccess(false);
  }, []);

  const mutate = useCallback(
    async (variables: TVariables): Promise<TData | null> => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      try {
        const result = await mutationFn(variables, abortControllerRef.current.signal);
        setData(result);
        setIsSuccess(true);
        setIsLoading(false);
        options.onSuccess?.(result, variables);
        return result;
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return null;
        }
        const message = err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(message);
        setIsLoading(false);
        options.onError?.(message);
        return null;
      }
    },
    [mutationFn, options]
  );

  return {
    mutate,
    isLoading,
    isSuccess,
    isError: error !== null,
    error,
    data,
    reset,
  };
}
