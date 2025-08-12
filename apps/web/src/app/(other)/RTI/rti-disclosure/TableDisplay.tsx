// rti-disclosure/TableDisplay.tsx
"use client";

import Image from "next/image";
import React from "react";

interface TableImage {
  imageURL: string;
  altText: string;
}

interface TableLinkItem {
  text: string;
  url: string;
}

export interface TableLink {
  links: TableLinkItem[];
}

export interface TableRowDetail {
  point: string;
  remark: string | TableImage | TableLink;
}

export interface TableRow {
  sNo: string;
  item: string;
  details: TableRowDetail[];
}

interface TableDisplayProps {
  data: TableRow[];
}

export function TableDisplay({ data }: TableDisplayProps) {
  const renderTextWithBreaks = (text: string) => {
    return text.split("\n").map((line, index) => {
      // Check if the line contains the domain name
      if (line.includes("@iiitdwd.ac.in")) {
        // Use a regular expression to find the full email address
        const emailMatch = line.match(/\b[A-Za-z0-9._%+-]+@iiitdwd\.ac\.in\b/);

        if (emailMatch) {
          const email = emailMatch[0];
          const parts = line.split(email);
          return (
            <React.Fragment key={index}>
              {parts[0]}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
              {parts[1]}
              {index < text.split("\n").length - 1 && <br />}
            </React.Fragment>
          );
        }
      }
      return (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Generate colors for section headers
  const getHeaderColor = (index: number) => {
    const colors = [
      "bg-[rgb(247,220,173)] text-black", // 247, 220, 173
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
            >
              S. No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2"
            >
              Details of disclosure
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3"
            >
              Remarks/ Reference Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* Section Header Row */}
              <tr>
                <td
                  colSpan={3}
                  className={`px-6 py-4 text-lg font-semibold ${getHeaderColor(rowIndex)}`}
                >
                  {renderTextWithBreaks(row.item)}
                </td>
              </tr>

              {/* Detail Rows */}
              {row.details.map((detail, detailIndex) => (
                <tr
                  key={`${rowIndex}-${detailIndex}`}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top">
                    {detailIndex === 0 ? renderTextWithBreaks(row.sNo) : ""}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top">
                    {renderTextWithBreaks(detail.point)}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top">
                    {typeof detail.remark === "string" ? (
                      renderTextWithBreaks(detail.remark)
                    ) : "imageURL" in detail.remark ? ( // Check for the 'imageURL' key
                      <Image
                        src={detail.remark.imageURL}
                        alt={detail.remark.altText}
                        width={200}
                        height={150}
                        className="max-w-full h-auto rounded-md shadow-sm"
                      />
                    ) : "links" in detail.remark ? ( // New check for the 'links' key
                      <div>
                        {detail.remark.links.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {renderTextWithBreaks(link.text)}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Assume it's a TableLink
                      <a
                        href={detail.remark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {renderTextWithBreaks(detail.remark.text)}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                No data available for this section.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
