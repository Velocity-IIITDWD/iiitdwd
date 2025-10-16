"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center text-title-3">
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-primary font-medium">
              {crumb.title}
            </span>
          ) : (
            <Link href={crumb.href} className="text-gray-700 hover:text-gray-900">
              {crumb.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}