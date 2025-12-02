// @ts-nocheck
import CareersPage from "@/app/(institute)/careers/careers-page";
import { get } from "@/sanity/lib/client";
import { queryJobCategories, queryJobs } from "@/sanity/lib/queries";
import { QueryJobsResult } from "@/sanity/types";

export default async function StaffPage(): JSX.Element {
  const [data, categories] = await Promise.all([
    get<QueryJobsResult>(queryJobs),
    get<{ value: string; title: string }[]>(queryJobCategories),
  ]);

  // Filter only staff jobs
  const staffJobs = data.filter(job => {
    const category = job?.category?.toLowerCase().trim();
    return category === "staff";
  });

  // Filter categories to only show staff
  const staffCategories = [{ value: "staff", title: "Staff" }];

  return <CareersPage Fulldata={staffJobs} categories={staffCategories} />;
}
