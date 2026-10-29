/** Base URL for the backend API, overridable via VITE_API_BASE_URL. */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

/** Extracts the backend's error message from a failed response, falling back to a generic one. */
export async function readErrorMessage(response: Response, fallback: string): Promise<string> {
  try {
    const body = await response.json();
    if (typeof body?.message === "string" && body.message.length > 0) {
      return body.message;
    }
  } catch {
    // Response body wasn't JSON; fall through to the generic message.
  }
  return `${fallback}: ${response.status}`;
}
