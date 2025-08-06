"use client";

import React, { useState } from "react";
// Assuming TableDisplay.tsx is in components/TableDisplay.tsx
import { TableDisplay } from "../rti-disclosure/TableDisplay";

interface TableImage {
  imageURL: string;
  altText: string;
}

// Define the data structures (copied from TableDisplay.tsx for self-containment)
interface TableRowDetail {
  point: string;
  remark: string | TableImage;
}

interface TableRow {
  sNo: string;
  item: string;
  details: TableRowDetail[];
}

interface TableDisplayProps {
  data: TableRow[];
}

// --- Hardcoded Test Data for each Sidebar Option ---

const organizationAndFunctionData: TableRow[] = [
  {
    sNo: "1.1",
    item: "Particulars of organisation, functions and duties [Section 4(1)(b)(i)]",
    details: [
      { point: "(i) Name and address of the Organization FM", remark: "IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad-580009" },
      { point: "(ii) Head of the organization FM", remark: "Dr. S. R. Mahadeva Prasanna , Director" },
      { point: "(iii) Vision, Mission and Key objectives FM", remark: "https://iiitdwd.ac.in" },
      { point: "(iv) Function and duties FM", remark: "Teaching and learning" },
      {
        point: "(v) Organization Chart FM ",
        remark: {
          imageURL: "https://assets.iiitdwd.ac.in/images/chart.png", // Placeholder image URL
          altText: "Organization Chart of IIIT Dharwad",
        },
      },
      {
        point: "(vi) Any other details-the genesis, inception, formation of the department and the HoDs from time to time as well as the committees/ Commissions constituted from time to time have been dealt",
        remark: "1. Computer Science & Engineering-HOD-Dr. Prabhu Prasad\n\n2. Electronics & Communication Engineering- HOD- Dr. Sibashankar Padhy\n\n3. Data Science & Artificial Intelligence- HOD-Dr. Siddharth R\n\n4. Department Arts, Science and Design- HOD- Dr. Aswath Babu",
      },
    ],
  },
  {
    sNo: "1.2",
    item: "Powers and duties of its officers and employees [Section 4(1)(b)(ii)]",
    details: [
      { point: "(i) Powers and duties of officers (administrative, financial and judicial) FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(ii) Power and duties of other employees FM", remark: "According to the post duties are assigned" },
      { point: "(iii) Rules/ orders under which powers and duty are derived and FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iv) Exercised FM", remark: "Yes" },
      { point: "(v) Work Allocation FM", remark: "As per the post work allocated" },
    ],
  },
  {
    sNo: "1.3",
    item: "Procedure followed in decision making process [Section 4(1)(b)(iii)]",
    details: [
      { point: "(i) Process of decision making Identify key decision making points FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(ii) Final decision making authority FM", remark: "Board of Governors" },
      { point: "(iii) Related provisions, acts, rules etc. FM", remark: "As per IIIT(PPP)Act, 23 of 9 August 2017" },
      { point: "(iv) Time limit for taking a decisions, if any FM", remark: "As per nature of the subject" },
      { point: "(v) Channel of supervision and accountability FM", remark: "Director / Registrar" },
    ],
  },
  {
    sNo: "1.4",
    item: "Norms for discharge of functions [Section 4(1)(b)(iv)]",
    details: [
      { point: "(i) Nature of functions/ services offered FM", remark: "Imparting technical education to the students" },
      { point: "(ii) Norms/ standards for functions/ service delivery FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iii) Process by which these services can be accessed PM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iv) Time-limit for achieving the targets PM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(v) Process of redress of grievances FM", remark: "Through grievance readressal cell" },
    ],
  },
  {
    sNo: "1.5",
    item: "Rules, regulations, instructions manual and records for discharging functions [Section 4(1)(b)(v)]",
    details: [
      { point: "(i) Title and nature of the record/ manual /instruction FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(ii) List of Rules, regulations, instructions manuals and records. FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iii) Acts/ Rules manuals etc. FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iv) Transfer policy and transfer orders", remark: "Not applicable" },
    ],
  },
  {
    sNo: "1.6",
    item: "Categories of documents held by the authority under its control [Section 4(1)(b)(vi)]",
    details: [
      { point: "(i) Categories of documents FM", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(ii) Custodian of documents/categories FM", remark: "Registrar" },
    ],
  },
  {
    sNo: "1.7",
    item: "Boards, Councils, Committees and other Bodies constituted as part of the Public Authority [Section 4(1)(b)(viii)]",
    details: [
      { point: "(i) Name of Boards, Council, Committee etc. FM", remark: "Fully met, BoG, Senate and Finance Committee" },
      { point: "(ii) Composition", remark: "Fully Met,\n\nhttps://www.iiitdwd.ac.in/governing-bodies/board/\n\nhttps://www.iiitdwd.ac.in/governing-bodies/senate/\n\nhttps://www.iiitdwd.ac.in/governing-bodies/financial/" },
      { point: "(iii) Dates from which constituted", remark: "Fully met, As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(iv) Term/ Tenure", remark: "Fully met, As per IIIT(PPP) Act, 23 of 9 August 2017 " },
      { point: "(v) Powers and functions", remark: "Fully met, As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(vi) Whether their meetings are open to the public?", remark: "Not Met" },
      { point: "(vii) Whether the minutes of the meetings are open to the public?", remark: "Not Met" },
      { point: "(viii) Place where the minutes if open to the public are available?", remark: "Not applicable" },
    ],
  },
  {
    sNo: "1.8",
    item: "Directory of officers and employees [Section 4(1)(b)(ix)]",
    details: [
      { point: "(i) Name and designation", remark: "1. Dr.S R Mahadeva Prasanna, Director\n\n2. Dr.Ravi B Vitlapur, Officiating Registrar" },
      { point: "(ii) Telephone , fax and email ID", remark: "Telephone: 0836-2250879\n\nEmail ID:\n\n1. director@iiitdwd.ac.in\n\n2. registrar@iiitdwd.ac.in" },
    ],
  },
  {
    sNo: "1.9",
    item: "Monthly Remuneration received by officers & employees including system of compensation [Section 4(1)(b)(x)]",
    details: [
      { point: "(i) List of employees with Gross monthly remuneration", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
      { point: "(ii) System of compensation as provided in its regulations", remark: "As per IIIT(PPP) Act, 23 of 9 August 2017" },
    ],
  },
  {
    sNo: "1.10",
    item: "Name, designation and other particulars of public information officers [Section 4(1)(b)(xvi)]",
    details: [
      { point: "(i) Name and designation of the public information officer (PIO), Assistant Public Information (s) & Appellate Authority", remark: "Dr. Mr. Ravi Vitlapur(Assistant Registrar)PIO" },
      { point: "(ii) Address, telephone numbers and email ID of each designated official", remark: "IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad -580009,\n\nTelephone No:0836-2250879\n\nregistrar@iiitdwd.ac.in\n\nassistantregistrar@iiitdwd.ac.in" },
    ],
  },
  {
    sNo: "1.11",
    item: "No. Of employees against whom Disciplinary action has been proposed/ taken [(Section 4(2))]",
    details: [
      { point: "No. of employees against whom disciplinary action has been\n\n(i) Pending for Minor penalty or major penalty proceedings ", remark: "NIL - Fully met" },
      { point: "(ii) Finalised for Minor penalty or major penalty proceedings", remark: "NIL - Fully met" },
    ],
  },
  {
    sNo: "1.12",
    item: "Programmes to advance understanding of RTI [(Section 26)]",
    details: [
      { point: "(i) Educational programmes", remark: "Partially met Through online" },
      { point: "(ii) Efforts to encourage public authority to participate in these programmes", remark: "Partially met -Yes" },
      { point: "(iii) Training of CPIO/APIO", remark: "Not met" },
      { point: "(iv) Update & publish guidelines on RTI by the Public Authorities concerned", remark: "https://iiitdwd.ac.in/docs/RTI.pdf" },
    ],
  },
  {
    sNo: "1.13",
    item: "Transfer policy and transfer orders [F No. 1/6/2011- IR dt. 15.4.2013]",
    details: [
      { point: "", remark: "Not applicable" },
    ],
  },
];

const budgetAndProgrammeData: TableRow[] = [
  {
    sNo: "2.1",
    item: "Budget allocated to each agency [Section 4(1)(b)(xi)]",
    details: [
      { point: "(i) Annual Budget", remark: "Available in Annual Reports." },
      { point: "(ii) Expenditure details", remark: "Available in Financial Statements." },
    ],
  },
  {
    sNo: "2.2",
    item: "Manner of execution of subsidy programmes [Section 4(1)(b)(xii)]",
    details: [
      { point: "(i) Scholarship Schemes", remark: "Details on student welfare page." },
    ],
  },
];

const publicityAndPublicInterfaceData: TableRow[] = [
  {
    sNo: "3.1",
    item: "Particulars of all plans, proposed expenditures and reports on disbursements made [Section 4(1)(b)(xiii)]",
    details: [
      { point: "(i) Annual Plan", remark: "Available on institute's official website." },
      { point: "(ii) Research Projects", remark: "Details in research section." },
    ],
  },
];

const eGovernanceData: TableRow[] = [
  {
    sNo: "4.1",
    item: "Particulars of recipients of concessions, permits or authorisations granted by it [Section 4(1)(b)(xiv)]",
    details: [
      { point: "(i) Student Concessions", remark: "As per institute policy." },
    ],
  },
  {
    sNo: "4.2",
    item: "Information available in electronic form [Section 4(1)(b)(xiv)]",
    details: [
      { point: "(i) Official Website", remark: "www.iiitdwd.ac.in" },
      { point: "(ii) Online Portals", remark: "Student and Faculty portals." },
    ],
  },
];

const informationAsMayBePrescribedData: TableRow[] = [
  {
    sNo: "5.1",
    item: "Such other information as may be prescribed [Section 4(1)(b)(xvii)]",
    details: [
      { point: "(i) RTI Act details", remark: "Public Information Officer contact." },
      { point: "(ii) Grievance Redressal", remark: "Mechanism and contact." },
    ],
  },
];

const informationDisclosedOnOwnInitiativeData: TableRow[] = [
  {
    sNo: "6.1",
    item: "Information disclosed on own initiative [Section 4(1)(b)(xvii)]",
    details: [
      { point: "(i) Annual Reports", remark: "Published annually on website." },
      { point: "(ii) Tenders and Procurements", remark: "Available on tender portal." },
      { point: "(iii) Campus Facilities", remark: "Details on infrastructure page." },
    ],
  },
];

// Map sidebar keys to their corresponding data
const allTableData: { [key: string]: TableRow[] } = {
  organization_function: organizationAndFunctionData,
  budget_programme: budgetAndProgrammeData,
  publicity_interface: publicityAndPublicInterfaceData,
  e_governance: eGovernanceData,
  information_prescribed: informationAsMayBePrescribedData,
  information_initiative: informationDisclosedOnOwnInitiativeData,
};

export default function InformationPage() {
  // State to manage the currently selected sidebar option
  const [selectedOption, setSelectedOption] = useState<string>("organization_function"); // Default to the first option

  // Define sidebar options with a unique key and display name
  const sidebarOptions = [
    { key: "organization_function", name: "Organisation and Function" },
    { key: "budget_programme", name: "Budget and Programme" },
    { key: "publicity_interface", name: "Publicity and Public interface" },
    { key: "e_governance", name: "E-Governance" },
    { key: "information_prescribed", name: "Information as may be prescribed" },
    { key: "information_initiative", name: "Information Disclosed on own Initiative" },
  ];

  // Get the data for the currently selected option
  const currentTableData = allTableData[selectedOption] || [];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left sidebar - Reverted to your original UI structure */}
      <div className="w-full md:w-64 p-6 max-md:border-b md:border-r border-gray-200 bg-white shadow-md">
        {/* Changed title to be more relevant to RTI information */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">RTI Information</h2>

        <div className="space-y-6">
          <div>
            {/* Removed the "Departments" subheading as it's not relevant to the RTI options */}
            <ul className="text-body">
              {sidebarOptions.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={() => setSelectedOption(option.key)}
                    className={`w-full border-l-2 text-left px-3 py-2 rounded-r cursor-pointer ${
                      selectedOption === option.key
                        ? "bg-blue-100 border-blue-600 font-medium" // Using standard Tailwind colors for active state
                        : "border-transparent text-gray-700 hover:bg-gray-50" // Inactive state
                    }`}
                  >
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Removed the "Resources" section as it's not relevant to the RTI options */}
        </div>
      </div>

      {/* Main content area for the table */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          {sidebarOptions.find(opt => opt.key === selectedOption)?.name || "Information Details"}
        </h1>
        <TableDisplay data={currentTableData} />
      </div>
    </div>
  );
}
