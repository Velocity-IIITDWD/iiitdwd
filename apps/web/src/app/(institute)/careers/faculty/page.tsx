// @ts-nocheck
import CareersPage from "@/app/(institute)/careers/careers-page";
import { get } from "@/sanity/lib/client";
import { queryJobCategories, queryJobs } from "@/sanity/lib/queries";
import { QueryJobsResult } from "@/sanity/types";

export default async function FacultyPage(): JSX.Element {
  const [data, categories] = await Promise.all([
    get<QueryJobsResult>(queryJobs),
    get<{ value: string; title: string }[]>(queryJobCategories),
  ]);

  const facultyJobs = data.filter(job => job.category === "faculty");

  const facultyCategories = categories.filter(cat => cat.value === "faculty");

  return <CareersPage Fulldata={facultyJobs} categories={facultyCategories} />;
}
