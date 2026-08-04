// apps/web/src/app/(other)/RTI/rti-disclosure/TableDisplay.tsx
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
  text?: string;
  links: TableLinkItem[];
}

export interface TableRowDetail {
  point: string;
  remark: string | TableImage | TableLink; // Updated to include TableLink
  rowSpan?: number;
  hideRemark?: boolean;
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
      const regex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)|(https?:\/\/[^\s\)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
      
      const elements: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          elements.push(line.substring(lastIndex, match.index));
        }
        
        const mdText = match[1];
        const mdUrl = match[2];
        const bareUrl = match[3];
        const email = match[4];

        if (email) {
          elements.push(
            <a
              key={`email-${index}-${match.index}`}
              href={`mailto:${email}`}
              className="text-blue-600 hover:underline"
            >
              {email}
            </a>
          );
        } else {
          const url = mdUrl || bareUrl;
          const linkText = mdText || bareUrl;
          elements.push(
            <a
              key={`link-${index}-${match.index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {linkText}
            </a>
          );
        }
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < line.length) {
        elements.push(line.substring(lastIndex));
      }

      return (
        <React.Fragment key={index}>
          {elements}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Generate colors for section headers
  const getHeaderColor = (index: number) => {
    const colors = ["bg-[rgb(247,220,173)] text-black"];
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
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2 border-l border-gray-200"
            >
              Details of disclosure
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3 border-l border-gray-200"
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
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top border-l border-gray-200">
                    {renderTextWithBreaks(detail.point)}
                  </td>
                  {!detail.hideRemark && (
                    <td 
                      className={`px-6 py-4 whitespace-normal text-sm text-gray-700 border-l border-gray-200 ${detail.rowSpan ? 'align-middle text-left' : 'align-top'}`}
                      rowSpan={detail.rowSpan}
                    >
                      {typeof detail.remark === "string" ? (
                        renderTextWithBreaks(detail.remark)
                      ) : "imageURL" in detail.remark ? (
                        <Image
                          src={detail.remark.imageURL}
                          alt={detail.remark.altText}
                          width={200}
                          height={150}
                          className="max-w-full h-auto rounded-md shadow-sm"
                        />
                      ) : "links" in detail.remark ? (
                        <div>
                          {detail.remark.text && (
                            <div className="mb-2">
                              {renderTextWithBreaks(detail.remark.text)}
                            </div>
                          )}
                          {detail.remark.links.map((link, linkIndex) => (
                            <div key={linkIndex}>
                              {link.url && link.url !== "#" ? (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {link.text.split("\n").map((line, i, arr) => (
                                    <React.Fragment key={i}>
                                      {line}
                                      {i < arr.length - 1 && <br />}
                                    </React.Fragment>
                                  ))}
                                </a>
                              ) : (
                                <span className="text-gray-900 font-semibold block mt-3 mb-1">
                                  {renderTextWithBreaks(link.text)}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </td>
                  )}
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
