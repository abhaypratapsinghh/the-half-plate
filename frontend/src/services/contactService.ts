import { API_BASE_URL } from "./apiClient";
import type { ContactInfo } from "../data/types";

/** Fetches the restaurant's contact details and map location from the backend. */
export async function getContactInfo(): Promise<ContactInfo> {
  const response = await fetch(`${API_BASE_URL}/api/contact`);
  if (!response.ok) {
    throw new Error(`Failed to load contact info: ${response.status}`);
  }
  return response.json();
}
