import { useEffect, useState } from "react";
import { getMenuCategories } from "../services/menuService";
import type { MenuCategory } from "../data/types";

export function useMenu() {
  const [data, setData] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    getMenuCategories()
      .then((categories) => {
        if (!cancelled) setData(categories);
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
