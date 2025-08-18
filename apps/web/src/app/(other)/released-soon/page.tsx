import React from "react";
import { ArrowLeftIcon } from "lucide-react";

export default function ComingSoon(): React.ReactElement {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      <h3 className="text-2xl md:text-4xl font-bold mb-15">
        Academic Calendar for First Year B.Tech will be Released Soon
      </h3>

      <a
        href="/"
        className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-title-3 text-bold text-amber-50 hover:bg-main/90 transition-colors bg-main rounded px-4 md:px-6 py-2 items-center"
      >
        <ArrowLeftIcon />
        <span>Go Back Home</span>
      </a>
    </main>
  );
}
