import { API_BASE_URL } from "./apiClient";
import { readErrorMessage } from "./apiClient";
import type { GuestReview } from "../data/types";

/** Fetches all guest reviews/feedback, newest first. */
export async function getReviews(): Promise<GuestReview[]> {
  const response = await fetch(`${API_BASE_URL}/api/reviews`);
  if (!response.ok) {
    throw new Error(`Failed to load reviews: ${response.status}`);
  }
  return response.json();
}

export interface NewReview {
  author: string;
  rating: number;
  text: string;
}

/** Submits a new guest review/feedback entry. */
export async function submitReview(review: NewReview): Promise<GuestReview> {
  const response = await fetch(`${API_BASE_URL}/api/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
  if (!response.ok) {
    throw new Error(await readErrorMessage(response, "Failed to submit review"));
  }
  return response.json();
}
