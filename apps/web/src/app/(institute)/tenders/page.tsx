// @ts-nocheck
import Tenders from "@/app/(institute)/tenders/Tenders";
import { get } from "@/sanity/lib/client";
import { queryTenders } from "@/sanity/lib/queries";
import { QueryTendersResult } from "@/sanity/types";
import { Metadata } from "next";

export default async function TendersPage(): Promise<JSX.Element> {
  const now = Date.now();
  const active: Tender[] = [];
  const archive: Tender[] = [];
  const tenders = await get<QueryTendersResult>(queryTenders);

  for (const tender of tenders) {
    const newTender = {
      ...tender,
      publishDate: Date.parse(tender.publishDate as string),
      submissionDeadline: Date.parse(tender.submissionDeadline as string),
      updatedAt: tender.updatedAt
        ? new Date(tender.updatedAt).getTime()
        : Date.now(),
    };
    if (newTender.cancelled || newTender.submissionDeadline <= now)
      archive.push(newTender);
    else active.push(newTender);
  }

  return <Tenders active={active} archive={archive} />;
}

export const metadata: Metadata = {
  title: "Tenders",
};
