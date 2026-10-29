import { OFFERS } from "../data/offers";
import type { Offer } from "../data/types";

/**
 * Returns active offers. Backed by static local data today; swapping the
 * body for `fetch('/api/offers').then(r => r.json())` later changes only
 * this file.
 */
export async function getOffers(): Promise<Offer[]> {
  return OFFERS;
}
