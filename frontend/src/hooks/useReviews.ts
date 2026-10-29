import { useCallback, useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";
import type { GuestReview } from "../data/types";

/** Poll interval so guests see new reviews from other visitors without reloading. */
const REFRESH_INTERVAL_MS = 30_000;

export function useReviews() {
  const [data, setData] = useState<GuestReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refresh = useCallback(async () => {
    try {
      const reviews = await getReviews();
      setData(reviews);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refresh]);

  const addReview = useCallback((review: GuestReview) => {
    setData((current) => [review, ...current]);
  }, []);

  return { data, loading, error, refresh, addReview };
}
