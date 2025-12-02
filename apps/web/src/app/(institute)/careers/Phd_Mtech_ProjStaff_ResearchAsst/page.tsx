// @ts-nocheck
import CareersPage from "@/app/(institute)/careers/careers-page";
import { get } from "@/sanity/lib/client";
import { queryJobCategories, queryJobs } from "@/sanity/lib/queries";
import { QueryJobsResult } from "@/sanity/types";

export default async function PhdMtechProjStaffPage(): JSX.Element {
  const [data, categories] = await Promise.all([
    get<QueryJobsResult>(queryJobs),
    get<{ value: string; title: string }[]>(queryJobCategories),
  ]);

  const filteredJobs = data.filter(job => {
    const category = job?.category?.toLowerCase().trim();
    return category !== "faculty" && category !== "staff";
  });

  const filteredCategories = categories.filter(cat => {
    const value = cat?.value?.toLowerCase().trim();
    return value !== "faculty" && value !== "staff";
  });

  return (
    <CareersPage Fulldata={filteredJobs} categories={filteredCategories} />
  );
}
