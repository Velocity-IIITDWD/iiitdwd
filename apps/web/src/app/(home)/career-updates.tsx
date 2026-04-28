import { get } from "@/sanity/lib/client";
import { queryJobs } from "@/sanity/lib/queries";
import AnnouncementComponent from "./announcement-component";

export default async function CareerUpdatesSection() {
  const jobs = await get<any[]>(queryJobs);
  
  const parseDate = (dateStr: string | undefined | null) => {
    if (!dateStr || !`${dateStr}`.trim() || dateStr === "NA") return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  };

  const sortedJobs = [...(jobs || [])].sort((a, b) => {
    const aDate = parseDate(a.publishDate) ?? parseDate(a.lastDate);
    const bDate = parseDate(b.publishDate) ?? parseDate(b.lastDate);
    if (aDate && bDate) return bDate.getTime() - aDate.getTime();
    if (aDate && !bDate) return -1;
    if (!aDate && bDate) return 1;
    return 0;
  });

  const latestJobs = sortedJobs.slice(0, 5).map(job => ({
    id: job._id || Math.random().toString(),
    title: job.title || "Career Update",
    date: job.publishDate || job.lastDate || null,
    isPinned: false,
    type: "announcement" as const,
    link: "/careers",
  }));

  if (latestJobs.length === 0) {
    return <p className="text-sm text-gray-600 px-4">No recent career updates.</p>;
  }

  return (
    <AnnouncementComponent 
      announcements={latestJobs} 
      viewAllLink="/careers"
      viewAllText="View all Careers"
    />
  );
}
