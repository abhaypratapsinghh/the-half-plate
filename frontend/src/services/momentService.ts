import { API_BASE_URL, readErrorMessage } from "./apiClient";
import type { Moment, MomentCategory } from "../data/types";

/** Resolves a moment's image path to an absolute URL served by the backend. */
export function momentImageUrl(moment: Moment): string {
  return `${API_BASE_URL}${moment.imageUrl}`;
}

/** Fetches celebration/happy-moment photos, newest first, optionally filtered by category. */
export async function getMoments(category?: MomentCategory): Promise<Moment[]> {
  const query = category ? `?category=${category}` : "";
  const response = await fetch(`${API_BASE_URL}/api/moments${query}`);
  if (!response.ok) {
    throw new Error(`Failed to load moments: ${response.status}`);
  }
  return response.json();
}

export interface NewMoment {
  category: MomentCategory;
  caption: string;
  submittedBy?: string;
  photo: File;
}

/** Uploads a new celebration or happy-moment photo. */
export async function submitMoment(moment: NewMoment): Promise<Moment> {
  const formData = new FormData();
  formData.append("category", moment.category);
  formData.append("caption", moment.caption);
  if (moment.submittedBy) formData.append("submittedBy", moment.submittedBy);
  formData.append("photo", moment.photo);

  const response = await fetch(`${API_BASE_URL}/api/moments`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(await readErrorMessage(response, "Failed to share photo"));
  }
  return response.json();
}
