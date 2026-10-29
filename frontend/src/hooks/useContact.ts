import { useEffect, useState } from "react";
import { getContactInfo } from "../services/contactService";
import type { ContactInfo } from "../data/types";

export function useContact() {
  const [data, setData] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    getContactInfo()
      .then((contactInfo) => {
        if (!cancelled) setData(contactInfo);
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
