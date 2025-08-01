import { DynamicProfileSections } from "@/components/committee";
import { get } from "@/sanity/lib/client";
import { GetBoard } from "@/sanity/lib/queries";
import { GetBoardResult } from "@/sanity/types";

export default async function Page() {
  const data = await get<GetBoardResult>(GetBoard);

  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={data} />
    </main>
  );
}
