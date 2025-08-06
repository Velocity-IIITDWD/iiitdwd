// components/TableDisplay.tsx
"use client";

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

// Define the data structure for an image
interface TableImage {
  imageURL: string;
  altText: string;
}

// Define the data structure for a single detail row within the table
interface TableRowDetail {
  point: string;
  remark: string | TableImage; // Modified to accept string or TableImage
}

// Define the data structure for a single main row in the table
interface TableRow {
  sNo: string;
  item: string;
  details: TableRowDetail[];
}

// Define props for the TableDisplay component
interface TableDisplayProps {
  data: TableRow[];
}

export function TableDisplay({ data }: TableDisplayProps) {
  // Helper function to render text with line breaks
  const renderRemarkText = (text: string) => {
    // Split the text by newline characters and map each segment to a React node
    // Join them with <br /> tags
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />} {/* Add <br /> except for the last line */}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
            >
              S.No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"
            >
              Item
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"
            >
              Details of disclosure
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"
            >
              Remarks/ Reference Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.details.map((detail, detailIndex) => (
                <tr key={`${rowIndex}-${detailIndex}`} className="hover:bg-gray-50">
                  {detailIndex === 0 && (
                    <>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top"
                        rowSpan={row.details.length}
                      >
                        {row.sNo}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top"
                        rowSpan={row.details.length}
                      >
                        {row.item}
                      </td>
                    </>
                  )}
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top">
                    {detail.point}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 align-top">
                    {/* Conditional rendering for remark */}
                    {typeof detail.remark === 'string' ? (
                      renderRemarkText(detail.remark) // Use the helper function here
                    ) : (
                      // Render image if remark is an object (TableImage)
                      <Image
                        src={detail.remark.imageURL}
                        alt={detail.remark.altText}
                        width={200} // Adjust width as needed
                        height={150} // Adjust height as needed
                        className="max-w-full h-auto rounded-md shadow-sm"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                No data available for this section.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
