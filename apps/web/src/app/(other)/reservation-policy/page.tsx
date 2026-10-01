import React from "react";

export default function ReservationPolicyPage(): React.ReactElement {
  return (
    <main className="flex flex-col items-start px-6 pt-8 pb-6 text-black max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reservation Policy</h1>
      
      <p className="text-justify leading-relaxed text-[17px] mb-4">
        The Indian Institute of Information Technology Dharwad (IIIT Dharwad), an Institute of National
        Importance established under the IIIT (PPP) Act, 2017, follows the reservation policies and
        instructions issued by the Government of India from time to time in matters relating to admissions
        and recruitment.
      </p>

      <p className="text-justify leading-relaxed text-[17px] mb-4">
        Reservation for various categories, including Scheduled Castes (SC), Scheduled Tribes (ST), Other
        Backward Classes – Non-Creamy Layer (OBC-NCL), Economically Weaker Sections (EWS), and
        Persons with Benchmark Disabilities (PwBD), shall be implemented as per the applicable
        Government of India rules, notifications, and orders.
      </p>

      <p className="text-justify leading-relaxed text-[17px] mb-6">
        The Institute maintains reservation rosters and implements reservation in recruitment and admissions
        in accordance with the applicable Acts, Rules, and instructions issued by the Ministry of Education,
        Government of India, and other competent authorities from time to time.
      </p>
    </main>
  );
}
