// @ts-nocheck
import CareersPage from "@/app/(institute)/careers/careers-page";
import { get } from "@/sanity/lib/client";
import { queryJobCategories, queryJobs } from "@/sanity/lib/queries";
import { QueryJobsResult } from "@/sanity/types";

export default async function Page() {
  const [data, categories] = await Promise.all([
    get<QueryJobsResult>(queryJobs),
    get<{ value: string; title: string }[]>(queryJobCategories),
  ]);

  return <CareersPage Fulldata={data} categories={categories} />;
}
