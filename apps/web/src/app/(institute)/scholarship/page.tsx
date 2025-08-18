import Link from "next/link";

export default function ScholarshipsPage() {
  return (
    <main>
      <div className="w-full text-title-3 font-normal max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-main-title text-main my-6 md:my-12 font-bold">
          Scholarships
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
          {/* All Meritorious */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              All Meritorious Scholarships
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/All_meritorius_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* Tentative Documents */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Tentative Documents Required
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/List_of_tentative_docs_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* OBC Category */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              OBC Category
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/OBC_category_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* PWD Category */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              PWD Category
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/PWD_category_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* SC Category */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              SC Category
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/SC_category_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* ST Category */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              ST Category
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="https://assets.iiitdwd.ac.in/docs/ST_category_signed.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* Scholarships for IIIT Dharwad Students */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Scholarships for IIIT Dharwad Students
            </h2>
            <ul className="list-none">
              <li>
                <Link
                  href="/docs/List_of_Scholarship.pdf"
                  className="text-main underline"
                  target="_blank"
                >
                  View PDF
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
