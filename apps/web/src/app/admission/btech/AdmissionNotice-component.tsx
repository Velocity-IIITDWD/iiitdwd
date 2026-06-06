const supernumerarySeatMatrix = [
  { branch: "CSE", sii: 5, sports: 2, olympiad: 2 },
  { branch: "DSAI", sii: 5, sports: 2, olympiad: 2 },
  { branch: "ECE", sii: 5, sports: 2, olympiad: 2 },
  { branch: "AI and Computing", sii: 5, sports: 2, olympiad: 2 },
];

export default function AdmissionNotice(): any {
  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto px-6">
      <div className="rounded-2xl border border-main/10 bg-gradient-to-br from-white via-white to-secondary/40 p-6 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <h1 className="text-large-title font-bold text-main leading-tight">
              B.Tech Admissions 2026-2027
            </h1>
            <p className="inline-flex rounded-full bg-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main">
              Admission to Undergraduate Programs AY (2026-2027)
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-main leading-tight">
              Study In India, Sports Excellence and Olympiad
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-8 max-w-4xl">
              Indian Institute of Information Technology Dharwad is introducing
              the following supernumerary seat categories for undergraduate
              admissions in academic year AY (2026 - 2027).
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-main/10 bg-main/5 p-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-main">
                Study-in-India (SII)
              </p>
              <p className="mt-2 text-2xl font-bold text-main">20 seats</p>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Supernumerary admission category
              </p>
            </div>
            <div className="rounded-xl border border-main/10 bg-secondary/30 p-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-main">
                Sports Excellence
              </p>
              <p className="mt-2 text-2xl font-bold text-main">8 seats</p>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Institute-level admission under approved guidelines
              </p>
            </div>
            <div className="rounded-xl border border-main/10 bg-secondary/20 p-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-main">
                Olympiad Category
              </p>
              <p className="mt-2 text-2xl font-bold text-main">8 seats</p>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Institute-level admission under approved guidelines
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-main/10 bg-white/90 p-5">
            <p className="text-base md:text-lg text-gray-700 leading-8">
              Admissions under Study-in-India, Sports and Olympiad shall be
              conducted at the Institute level in accordance with the approved
              guidelines. The list of programs and the number of seats available
              in each program are given below.
            </p>

            <div className="mt-5 overflow-x-auto rounded-xl border border-main/10 bg-white">
              <table className="min-w-full text-left text-sm md:text-base">
                <thead className="bg-main text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Branch</th>
                    <th className="px-4 py-3 font-semibold text-center">
                      Study In India (SII)
                    </th>
                    <th className="px-4 py-3 font-semibold text-center">
                      Sports
                    </th>
                    <th className="px-4 py-3 font-semibold text-center">
                      Olympiad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supernumerarySeatMatrix.map(row => (
                    <tr
                      key={row.branch}
                      className="border-t border-main/10 odd:bg-secondary/15"
                    >
                      <td className="px-4 py-3 font-semibold text-main">
                        {row.branch}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {row.sii}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {row.sports}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {row.olympiad}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t border-main/10 bg-main/10 font-bold">
                  <tr>
                    <td className="px-4 py-3 text-main">Total Seats</td>
                    <td className="px-4 py-3 text-center text-main">20</td>
                    <td className="px-4 py-3 text-center text-main">8</td>
                    <td className="px-4 py-3 text-center text-main">8</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-main/10 bg-white/90 p-5">
            <h3 className="text-xl md:text-2xl font-bold text-main mb-4">
              General Admission Guideline
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-700 leading-8 list-disc pl-5">
              <li>
                The candidates are required to apply through online
                applications, links are provided below.
              </li>
              <li className="rounded-xl border border-main/10 bg-main/5 px-4 py-3 shadow-sm">
                <span className="font-bold text-main">
                  Study In India Program:
                </span>{" "}
                <a
                  href="https://www.studyinindia.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-main underline decoration-2 underline-offset-4 hover:text-primary"
                >
                  https://www.studyinindia.gov.in/
                </a>{" "}
                <span className="text-gray-700">
                  For more details read the detailed SII guidelines for
                  admissions.
                </span>
              </li>
              <li className="rounded-xl border border-main/10 bg-main/5 px-4 py-3 shadow-sm">
                <span className="font-bold text-main">SEA, OEA and SII:</span>{" "}
                <a
                  href="https://docs.google.com/document/d/1VMB7NvKJVvlVTA4_EvtELzk9ikDXHH3_7lGwrtoOl3w/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-main underline decoration-2 underline-offset-4 hover:text-primary break-all"
                >
                  {
                    "https://docs.google.com/document/d/1VMB7NvKJVvlVTA4_EvtELzk9ikDXHH3_7lGwrtoOl3w/edit?usp=sharing"
                  }
                </a>
              </li>
              <li className="rounded-xl border border-main/10 bg-secondary/20 px-4 py-3 shadow-sm">
                <span className="font-bold text-main">
                  Sports and Olympiad Program:
                </span>{" "}
                <a
                  href="https://forms.gle/rWUJz8UECf2KLnAA8"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-main underline decoration-2 underline-offset-4 hover:text-primary"
                >
                  https://forms.gle/rWUJz8UECf2KLnAA8
                </a>{" "}
                <span className="text-gray-700">
                  For more details read the detailed Sports and Olympiad
                  guidelines for admissions.
                </span>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-accent/20 bg-accent/10 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-main">
                Application deadline
              </p>
              <p className="mt-2 text-xl md:text-2xl font-bold text-main">
                30th June 2026
              </p>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Applications received till this date shall be considered for the
                admission in this academic year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
