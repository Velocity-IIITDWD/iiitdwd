import { projectId } from "@/sanity/env";

/**
 * Get the Sanity Studio token from localStorage
 * This follows the Sanity Studio Mode pattern from the SDK guide
 */
export function getSanityStudioToken(): string | null {
  try {
    // The Sanity SDK stores tokens in localStorage with this key pattern
    const tokenKey = `__studio_auth_token_${projectId}`;
    const value = localStorage.getItem(tokenKey);

    const token = JSON.parse(value || "{}").token;

    if (token && token.length > 0) {
      return token;
    }

    // Fallback: check for generic token (older Studio versions)
    const fallbackToken = localStorage.getItem("__sanity_auth_token");
    return fallbackToken && fallbackToken.length > 0 ? fallbackToken : null;
  } catch (error) {
    console.error(
      "Error accessing Sanity Studio token from localStorage:",
      error
    );
    return null;
  }
}
