const SANITY_DATASET = process.env.SANITY_DATASET;
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;

if (!SANITY_DATASET || !SANITY_PROJECT_ID) {
  console.warn("Warning: SANITY environment variables not set");
}

export const env = {
  SANITY_DATASET: SANITY_DATASET,
  SANITY_PROJECT_ID: SANITY_PROJECT_ID,
};
