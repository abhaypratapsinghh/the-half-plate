import { useEffect, useState } from "react";
import { getOffers } from "../services/offerService";
import type { Offer } from "../data/types";

export function useOffers() {
  const [data, setData] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    getOffers()
      .then((offers) => {
        if (!cancelled) setData(offers);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
