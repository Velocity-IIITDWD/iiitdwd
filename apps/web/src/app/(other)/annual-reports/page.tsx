import React from "react";
import { FileText, Download, ExternalLink, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Annual Reports | IIIT Dharwad",
  description: "View and download the Annual Reports of Indian Institute of Information Technology, Dharwad.",
};

// Next.js Revalidation (adjust as needed)
export const revalidate = 3600; // revalidate at most every hour

interface AnnualReport {
  _id: string;
  displayText: string;
  issueUrl: string;
  previewImg: string;
}

export default async function AnnualReportsPage() {
  // Fetch annual reports from Sanity, ordered by displayText descending (e.g., "Annual Report 2024-25" -> "2023-24")
  const query = `*[_type == "annualReport"] | order(displayText desc) { 
    _id, 
    displayText, 
    issueUrl, 
    previewImg
  }`;
  
  const annualReports = await client.fetch<AnnualReport[]>(query);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a8a] sm:text-5xl">
            Annual Reports
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore the progressive journey, academic achievements, and financial audits of IIIT Dharwad over the years.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-12 flex justify-center">
          <div className="w-24 h-1 bg-[#1e3a8a] rounded-full"></div>
        </div>

        {annualReports.length === 0 ? (
          <div className="mt-16 text-center text-gray-500 bg-white p-12 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg">No annual reports available yet. Please add them in the Sanity CMS.</p>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {annualReports.map((report) => (
              <div
                key={report._id}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col transform hover:-translate-y-1"
              >
                {/* Cover Image Section */}
                <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden flex items-center justify-center p-4">
                  {report.previewImg ? (
                    <img
                      src={report.previewImg}
                      alt={report.displayText || "Annual Report Cover"}
                      className="object-cover w-full h-full rounded shadow group-hover:scale-105 transition-transform duration-500 z-0"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 h-full w-full bg-white rounded shadow border border-gray-100">
                      <ImageIcon className="w-16 h-16 mb-2 opacity-40" />
                      <span className="text-sm font-medium">No Cover Image</span>
                    </div>
                  )}
                  
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  {/* Quick Download Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <Link
                      href={report.issueUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#1e3a8a] font-semibold py-3 px-6 rounded shadow-lg hover:bg-[#1e3a8a] hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      View Document
                    </Link>
                  </div>
                </div>
                
                {/* Text Content Section */}
                <div className="p-6 flex flex-col flex-grow bg-white z-30 relative border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#1e3a8a]" strokeWidth={2} />
                    <span className="font-semibold text-xs text-gray-500 uppercase tracking-wide">
                      Official Report
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#1e3a8a] transition-colors duration-200">
                    {report.displayText}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-gray-600 hover:text-[#1e3a8a] transition-colors duration-200">
                    <Link
                      href={report.issueUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full"
                    >
                      Read Full Report
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-600 text-sm max-w-3xl mx-auto">
          <p className="leading-relaxed">
            The Annual Reports are published as per the mandate of the Institute and are tabled in both houses of the Parliament. All reports are available in high-quality PDF format for public disclosure.
          </p>
        </div>
      </div>
    </div>
  );
}
