"use server";

import { dataset, projectId } from "@/sanity/env";

/**
 * Validate a Sanity Studio token using the simple query approach
 * Returns statusCode 400 if unauthenticated, or 'result' key if authenticated
 */
export async function validateSanityToken(token: string): Promise<{
  isValid: boolean;
  error?: string;
}> {
  if (!token || token.length === 0) {
    return {
      isValid: false,
      error: "No token provided",
    };
  }

  try {
    const response = await fetch(
      `https://${projectId}.api.sanity.io/v2021-06-07/data/query/${dataset}?query=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    // Check if we got statusCode 400 (unauthenticated) or 'result' key (authenticated)
    if (data.error) {
      return {
        isValid: false,
        error: data.error,
      };
    } else if (data.result !== undefined) {
      return { isValid: true };
    } else {
      console.log("data", data);
      return {
        isValid: false,
        error: "Unexpected response from Sanity API",
      };
    }
  } catch (error) {
    return {
      isValid: false,
      error:
        error instanceof Error ? error.message : "Failed to validate token",
    };
  }
}

/**
 * Check if the current user is authenticated to Sanity Studio
 */
export async function checkSanityAuthWithToken(token?: string): Promise<{
  isAuthenticated: boolean;
  error?: string;
}> {
  if (!token) {
    return {
      isAuthenticated: false,
      error:
        "No Sanity Studio token found. Please authenticate to Studio first.",
    };
  }

  const validation = await validateSanityToken(token);

  return {
    isAuthenticated: validation.isValid,
    error: validation.error,
  };
}
