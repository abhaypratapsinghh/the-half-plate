import { useCallback, useEffect, useState } from "react";
import { getMoments } from "../services/momentService";
import type { Moment, MomentCategory } from "../data/types";

/** Poll interval so guests see new photos from other visitors without reloading. */
const REFRESH_INTERVAL_MS = 30_000;

export function useMoments(category?: MomentCategory) {
  const [data, setData] = useState<Moment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refresh = useCallback(async () => {
    try {
      const moments = await getMoments(category);
      setData(moments);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refresh]);

  const addMoment = useCallback((moment: Moment) => {
    setData((current) => [moment, ...current]);
  }, []);

  return { data, loading, error, refresh, addMoment };
}
