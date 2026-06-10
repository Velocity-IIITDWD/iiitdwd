"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, ChevronDown, ChevronUp, ArrowDown } from "lucide-react";

import {
  josaaLinks,
  dasaLinks,
  siiLinks,
  sportsLinks,
  olympiadLinks,
} from "./admissionLinkData";

import CutoffRanks from "./CutoffRanks-component";
import InstituteContent from "./InstituteContent-component";
import SeatMatrix from "./seatMatrix-component";

export default function Page(): JSX.Element {
  const [showSeatMatrix, setShowSeatMatrix] = useState(false);
  const [showCutoffRanks, setShowCutoffRanks] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <div className="space-y-10 w-[87.5vw] max-w-[1680px] mx-auto">
        
        {/* Header Banner */}
        <div className="rounded-2xl border border-main/10 bg-white shadow-sm overflow-hidden">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-main/10 via-transparent to-transparent">
            <h1 className="text-large-title text-main font-bold tracking-tight">
              B.Tech Admissions 2026-2027
            </h1>
            <p className="mt-3 text-title-2 text-gray-500 max-w-2xl leading-relaxed">
              IIIT Dharwad offers multiple channels of admission for undergraduate programs. Find detailed eligibility, seat matrices, and application links below.
            </p>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="space-y-4">
          <h2 className="text-title-1 font-bold text-main tracking-tight">Ways of Admission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { id: "josaa", title: "JoSAA / CSAB", subtitle: "Indian Nationals" },
              { id: "dasa", title: "DASA Counselling", subtitle: "Foreign / NRI / PIO / OCI" },
              { id: "sii", title: "Study in India (SII)", subtitle: "International Students" },
              { id: "sports", title: "Sports Excellence", subtitle: "Meritorious Sportspersons" },
              { id: "olympiad", title: "Olympiad Excellence", subtitle: "Academic Achievers" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="text-left p-5 rounded-2xl border border-main/10 bg-white hover:bg-main/5 hover:border-main/30 shadow-sm transition-all duration-300 group cursor-pointer flex flex-col justify-between h-44"
              >
                <div>
                  <span className="text-xs font-semibold text-main/60 uppercase tracking-wider block mb-1">
                    Channel 0{idx + 1}
                  </span>
                  <h3 className="font-bold text-main group-hover:text-primary transition-colors text-title-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.subtitle}
                  </p>
                </div>
                <div className="flex items-center text-main text-xs font-bold uppercase tracking-wider gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                  View details <ArrowDown size={14} className="animate-bounce" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Admission Sections */}
        <div className="space-y-8 mt-12">
          
          {/* 1. JoSAA / CSAB Counselling */}
          <section id="josaa" className="scroll-mt-6">
            <Card className="border border-main/10 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-main/5 via-transparent to-transparent border-b border-gray-100/50 p-6 sm:p-8">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-large-title text-main font-bold">
                      1. JoSAA / CSAB Counselling
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-title-3 mt-1">
                      Primary pathway for Indian Nationals
                    </CardDescription>
                  </div>
                  <Badge className="bg-main text-white font-semibold px-3 py-1">National Level</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-4 text-gray-700 text-title-3 leading-relaxed">
                  <p>
                    Admissions to B.Tech. programs for Indian nationals are conducted through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-semibold text-main">
                    <li>JoSAA (Joint Seat Allocation Authority) Counselling</li>
                    <li>CSAB (Central Seat Allocation Board) Special Rounds</li>
                  </ul>
                  <p className="mt-4">
                    Candidates must qualify in <strong>JEE (Main)</strong> and participate in the counselling process as prescribed by the respective authorities.
                  </p>
                </div>

                {/* Useful Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-main font-semibold text-title-2 mb-4">Quick Links & Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {josaaLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-main/10 rounded-xl bg-white hover:bg-secondary/30 transition-colors shadow-sm"
                      >
                        <div className="p-2 bg-main/5 text-main rounded-lg mr-3 flex-shrink-0">
                          {link.href.startsWith("http") ? (
                            <ExternalLink size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>
                        <span className="text-title-3 text-gray-600 font-medium hover:text-main leading-snug">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Collapsible Seat Matrix */}
                <div className="mt-8 border border-main/10 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setShowSeatMatrix(!showSeatMatrix)}
                    className="w-full flex justify-between items-center p-5 font-semibold text-main hover:bg-main/5 transition-colors text-title-2"
                  >
                    <span>UG Seat Matrix (Academic Year 2026-27)</span>
                    {showSeatMatrix ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {showSeatMatrix && (
                    <div className="p-5 border-t border-main/10 bg-gray-50/30 overflow-x-auto">
                      <SeatMatrix />
                    </div>
                  )}
                </div>

                {/* Collapsible Cutoff Ranks */}
                <div className="mt-6 border border-main/10 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setShowCutoffRanks(!showCutoffRanks)}
                    className="w-full flex justify-between items-center p-5 font-semibold text-main hover:bg-main/5 transition-colors text-title-2"
                  >
                    <span>JEE CRL Cutoff Ranks for 2025-26</span>
                    {showCutoffRanks ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {showCutoffRanks && (
                    <div className="p-5 border-t border-main/10 bg-gray-50/30 overflow-x-auto">
                      <CutoffRanks />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 2. DASA Counselling */}
          <section id="dasa" className="scroll-mt-6">
            <Card className="border border-main/10 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-main/5 via-transparent to-transparent border-b border-gray-100/50 p-6 sm:p-8">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-large-title text-main font-bold">
                      2. DASA Counselling
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-title-3 mt-1">
                      Direct Admission of Students Abroad
                    </CardDescription>
                  </div>
                  <Badge className="bg-main text-white font-semibold px-3 py-1">International / NRI</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-700 text-title-3 leading-relaxed">
                  Admissions for Foreign Nationals, NRIs, PIOs, and OCIs are conducted through the Direct Admission of Students Abroad (DASA) scheme.
                </p>

                {/* DASA seats overview */}
                <div className="p-5 bg-main/5 border border-main/10 rounded-xl">
                  <h4 className="font-semibold text-main text-title-2 mb-2">Seat Allocation Guidelines</h4>
                  <p className="text-gray-700 text-title-3 leading-relaxed">
                    Supernumerary seats under the DASA scheme are allocated according to Government of India rules:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700 text-title-3 font-semibold">
                    <li>DASA General: 10% of total seat capacity</li>
                    <li>CIWG (Children of Indian Workers in Gulf): 5% of total seat capacity</li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-main font-semibold text-title-2 mb-4">Quick Links & Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dasaLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-main/10 rounded-xl bg-white hover:bg-secondary/30 transition-colors shadow-sm"
                      >
                        <div className="p-2 bg-main/5 text-main rounded-lg mr-3 flex-shrink-0">
                          {link.href.startsWith("http") ? (
                            <ExternalLink size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>
                        <span className="text-title-3 text-gray-600 font-medium hover:text-main leading-snug">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 3. Study in India (SII) Program */}
          <section id="sii" className="scroll-mt-6">
            <Card className="border border-main/10 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-main/5 via-transparent to-transparent border-b border-gray-100/50 p-6 sm:p-8">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-large-title text-main font-bold">
                      3. Study in India (SII) Program
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-title-3 mt-1">
                      Government of India international initiative
                    </CardDescription>
                  </div>
                  <Badge className="bg-main text-white font-semibold px-3 py-1">Supernumerary Category</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-700 text-title-3 leading-relaxed">
                  International students may seek admission through the Study in India (SII) initiative of the Government of India.
                </p>

                {/* SII seats matrix */}
                <div className="rounded-xl border border-main/10 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-main text-title-2 mb-3">Study in India Seat Matrix</h4>
                  <p className="text-gray-700 text-title-3 mb-4">
                    A total of <strong>20 supernumerary seats</strong> are available under this category (5 seats per branch):
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-main/10 bg-white">
                    <table className="min-w-full text-left text-sm md:text-base">
                      <thead className="bg-main text-white">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-title-3">Branch</th>
                          <th className="px-4 py-3 font-semibold text-center text-title-3">Seats Available</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Computer Science and Engineering (CSE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">5</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Data Science and Artificial Intelligence (DSAI)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">5</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Electronics and Communication Engineering (ECE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">5</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">AI and Computing</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">5</td>
                        </tr>
                      </tbody>
                      <tfoot className="border-t border-main/10 bg-main/10 font-bold">
                        <tr>
                          <td className="px-4 py-3 text-main text-title-3">Total Seats</td>
                          <td className="px-4 py-3 text-center text-main text-title-3">20</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-main font-semibold text-title-2 mb-4">Quick Links & Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {siiLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-main/10 rounded-xl bg-white hover:bg-secondary/30 transition-colors shadow-sm"
                      >
                        <div className="p-2 bg-main/5 text-main rounded-lg mr-3 flex-shrink-0">
                          {link.href.startsWith("http") ? (
                            <ExternalLink size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>
                        <span className="text-title-3 text-gray-600 font-medium hover:text-main leading-snug">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 4. Sports Excellence Admission */}
          <section id="sports" className="scroll-mt-6">
            <Card className="border border-main/10 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-main/5 via-transparent to-transparent border-b border-gray-100/50 p-6 sm:p-8">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-large-title text-main font-bold">
                      4. Sports Excellence Admission
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-title-3 mt-1">
                      Institute-level supernumerary channel
                    </CardDescription>
                  </div>
                  <Badge className="bg-main text-white font-semibold px-3 py-1">Institute-Level</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-700 text-title-3 leading-relaxed">
                  IIIT Dharwad recognizes outstanding achievements in sports and provides a dedicated admission channel for meritorious sportspersons. Eligible candidates with notable accomplishments at national and international levels may apply under the Sports Excellence category, subject to the institute's admission guidelines.
                </p>

                {/* Sports seats matrix */}
                <div className="rounded-xl border border-main/10 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-main text-title-2 mb-3">Sports Excellence Seat Matrix</h4>
                  <p className="text-gray-700 text-title-3 mb-4">
                    A total of <strong>8 supernumerary seats</strong> are available under this category (2 seats per branch):
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-main/10 bg-white">
                    <table className="min-w-full text-left text-sm md:text-base">
                      <thead className="bg-main text-white">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-title-3">Branch</th>
                          <th className="px-4 py-3 font-semibold text-center text-title-3">Seats Available</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Computer Science and Engineering (CSE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Data Science and Artificial Intelligence (DSAI)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Electronics and Communication Engineering (ECE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">AI and Computing</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                      </tbody>
                      <tfoot className="border-t border-main/10 bg-main/10 font-bold">
                        <tr>
                          <td className="px-4 py-3 text-main text-title-3">Total Seats</td>
                          <td className="px-4 py-3 text-center text-main text-title-3">8</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-main font-semibold text-title-2 mb-4">Quick Links & Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sportsLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-main/10 rounded-xl bg-white hover:bg-secondary/30 transition-colors shadow-sm"
                      >
                        <div className="p-2 bg-main/5 text-main rounded-lg mr-3 flex-shrink-0">
                          {link.href.startsWith("http") ? (
                            <ExternalLink size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>
                        <span className="text-title-3 text-gray-600 font-medium hover:text-main leading-snug">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 5. Olympiad Excellence Admission */}
          <section id="olympiad" className="scroll-mt-6">
            <Card className="border border-main/10 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-r from-main/5 via-transparent to-transparent border-b border-gray-100/50 p-6 sm:p-8">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-large-title text-main font-bold">
                      5. Olympiad Excellence Admission
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-title-3 mt-1">
                      Institute-level supernumerary channel
                    </CardDescription>
                  </div>
                  <Badge className="bg-main text-white font-semibold px-3 py-1">Institute-Level</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-700 text-title-3 leading-relaxed">
                  To encourage academic excellence, IIIT Dharwad offers admission opportunities to students who have demonstrated exceptional performance in prestigious national and international Olympiads. Eligible candidates may apply under the Olympiad Excellence category as per the institute's eligibility criteria and admission policy.
                </p>

                {/* Olympiad seats matrix */}
                <div className="rounded-xl border border-main/10 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-main text-title-2 mb-3">Olympiad Excellence Seat Matrix</h4>
                  <p className="text-gray-700 text-title-3 mb-4">
                    A total of <strong>8 supernumerary seats</strong> are available under this category (2 seats per branch):
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-main/10 bg-white">
                    <table className="min-w-full text-left text-sm md:text-base">
                      <thead className="bg-main text-white">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-title-3">Branch</th>
                          <th className="px-4 py-3 font-semibold text-center text-title-3">Seats Available</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Computer Science and Engineering (CSE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Data Science and Artificial Intelligence (DSAI)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">Electronics and Communication Engineering (ECE)</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                        <tr className="border-t border-main/10 odd:bg-secondary/15">
                          <td className="px-4 py-3 font-semibold text-main text-title-3">AI and Computing</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-title-3">2</td>
                        </tr>
                      </tbody>
                      <tfoot className="border-t border-main/10 bg-main/10 font-bold">
                        <tr>
                          <td className="px-4 py-3 text-main text-title-3">Total Seats</td>
                          <td className="px-4 py-3 text-center text-main text-title-3">8</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-main font-semibold text-title-2 mb-4">Quick Links & Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {olympiadLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-main/10 rounded-xl bg-white hover:bg-secondary/30 transition-colors shadow-sm"
                      >
                        <div className="p-2 bg-main/5 text-main rounded-lg mr-3 flex-shrink-0">
                          {link.href.startsWith("http") ? (
                            <ExternalLink size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>
                        <span className="text-title-3 text-gray-600 font-medium hover:text-main leading-snug">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* General Institute Content */}
        <div className="pt-6 border-t border-gray-200">
          <InstituteContent />
        </div>
      </div>
    </div>
  );
}
