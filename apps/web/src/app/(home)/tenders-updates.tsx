import { get } from "@/sanity/lib/client";
import { queryTenders } from "@/sanity/lib/queries";
import AnnouncementComponent from "./announcement-component";

export default async function TendersUpdatesSection() {
  const tenders = await get<any[]>(queryTenders);
  
  const parseDate = (dateStr: string | undefined | null) => {
    if (!dateStr || !`${dateStr}`.trim() || dateStr === "NA") return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  };

  const sortedTenders = [...(tenders || [])].sort((a, b) => {
    const aDate = parseDate(a.publishDate) ?? parseDate(a._createdAt);
    const bDate = parseDate(b.publishDate) ?? parseDate(b._createdAt);
    if (aDate && bDate) return bDate.getTime() - aDate.getTime();
    if (aDate && !bDate) return -1;
    if (!aDate && bDate) return 1;
    return 0;
  });

  const latestTenders = sortedTenders.slice(0, 10).map(tender => ({
    id: tender._id || Math.random().toString(),
    title: tender.title || "Tender Notice",
    date: tender.publishDate || tender._createdAt || null,
    isPinned: false,
    type: "announcement" as const,
    link: tender.link || "/tenders",
  }));

  if (latestTenders.length === 0) {
    return <p className="text-sm text-gray-600 px-4">No active tenders at the moment.</p>;
  }

  return (
    <AnnouncementComponent 
      announcements={latestTenders} 
      viewAllLink="/tenders"
      viewAllText="View all Tenders"
    />
  );
}
