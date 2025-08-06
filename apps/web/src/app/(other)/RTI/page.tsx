import React from "react";

export default function RTIPage(): React.ReactElement {
  return (
    <main className="flex flex-col items-start px-6 pt-8 pb-6 font-['Times_New_Roman'] text-black">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/images/RTI_logo1.png"
          alt="RTI Logo"
          width={220}
          height={138}
          loading="lazy"
        />
      </div>

      {/* Intro Paragraph */}
      <p className="text-justify leading-relaxed text-[17px] max-w-5xl mb-6 ml-5">
        <strong>Right to Information (RTI)</strong> is an Act of the Indian Parliament enforced from the year 2005, to
        provide for a practical regime for citizens to secure access to information under the control of
        public authorities. This aims to promote transparency and accountability in the working of every
        public authority.
      </p>

      {/* Address */}
      <div className="text-justify leading-relaxed text-[17px] max-w-5xl space-y-1 mb-6 ml-5">
        <p><strong>Address:</strong> RTI cell</p>
        <p className="ml-18">Indian Institute of Information Technology Dharwad.</p>
        <p className="ml-18">Ittigatti Road, Near Sattur Colony,</p>
        <p className="ml-18">Dharwad-580009, Karnataka</p>
      </div>

      {/* Links */}
      <div className="text-blue-700 underline space-y-2 text-[17px] ml-5">
        <a href="/RTI/PIO">Public Information Officers</a><br />
        <a className="mt-5" href="RTI/rti-disclosure">RTI Section 4 Disclosure</a>
      </div>
    </main>
  );
}
