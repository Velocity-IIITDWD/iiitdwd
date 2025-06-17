import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // SANITY_TOKEN: z.string(),
    SANITY_DATASET: z.string(),
    SANITY_PROJECT_ID: z.string(),
  },
  // For static exports, we need to explicitly map the runtime environment variables
  runtimeEnv: {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
});
