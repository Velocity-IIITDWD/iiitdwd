"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Current Chairperson", href: "/chairperson" },
  { label: "Former Chairperson", href: "/former-chairperson" },
  { label: "Founding Chairperson", href: "/founding-chairperson" },
];

export default function ChairpersonTabs() {
  const pathname = usePathname();

  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto pb-10">
      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-primary/30 pt-6">
        {tabs.map(tab => {
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-full border px-4 py-2 text-sm md:text-base transition ${
                isActive
                  ? "bg-main text-white border-main"
                  : "border-main text-main hover:bg-main hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
