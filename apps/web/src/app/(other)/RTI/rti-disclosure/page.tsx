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
    item: "Budget allocated to each agency including all plans, proposed expenditure and reports on disbursements made etc. [Section 4(1)(b)(xi)]",
    details: [
      { point: "(i) Total Budget for the public authority", remark: "Not Met" },
      { point: "(ii) Budget for each agency and plan & programmes", remark: "Not Met" },
      { point: "(iii) Proposed expenditures", remark: "Not Met" },
      { point: "(iv) Revised budget for each agency, if any", remark: "Not Met" },
      { point: "(v) Report on disbursements made and place where the related reports are available", remark: "Not Met" },
    ],
  },
  {
    sNo: "2.2",
    item: "Foreign and domestic tours (F.No. 1/8/2012-IR dt. 11.9.2012)",
    details: [
      { point: "(i) Budget", remark: "Not Applicable" },
      { point: "(ii) Foreign and domestic Tours by ministries and officials of the rank of Joint Secretary to the Government and above, as well as the heads of the Department.\n\na) Places visited\n\nb) The period of visit\n\nc) The number of members in the official delegation\n\nd) Expenditure on the visit", remark: "Not Applicable" },
      { point: "(iii) Information related to procurements\n\na) Notice/tender enquires, and corrigenda if any thereon,\n\nb) Details of the bids awarded comprising the names of the suppliers of goods/services being procured,\n\nc) The works contracts concluded – in any such combination of the above-and\n\nd) The rate /rates and the total amount at which such procurement or works contract is to be executed.", remark: "Partially met\n\nhttps://www.iiitdwd.ac.in/tenders/" },
    ],
  },
  {
    sNo: "2.3",
    item: "Manner of execution of Subsidy programme [Section 4(i)(b)(xii)]",
    details: [
      { point: "(i) Name of the programme of activity", remark: "Not Applicable" },
      { point: "(ii) Objective of the programme", remark: "Not Applicable" },
      { point: "(iii) Procedure to avail benefits", remark: "Not Applicable" },
      { point: "(iv) Duration of the programme/ scheme", remark: "Not Applicable" },
      { point: "(v) Physical and financial targets of the programme", remark: "Not Applicable" },
      { point: "(vi) Nature/ scale of subsidy /amount allotted", remark: "Not Applicable" },
      { point: "(vii) Eligibility criteria for grant of subsidy", remark: "Not Applicable" },
      { point: "(viii) Details of beneficiaries of subsidy programme (number, profile etc)", remark: "Not Applicable" },
    ],
  },
  {
    sNo: "2.4",
    item: "Discretionary and nondiscretionary grants [F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      { point: "(i) Discretionary and non-discretionary grants/ allocations to State Govt./ NGOs/other institutions", remark: "Not Met" },
      { point: "(ii) Annual accounts of all legal entities who are provided grants by public Not met authorities", remark: "Not Met" },
    ],
  },
  {
    sNo: "2.5",
    item: "Particulars of recipients of concessions, permits of authorizations granted by the public authority [Section 4(1)(b)(xiii)]",
    details: [
      { point: "(i) Concessions, permits or authorizations granted by public authority", remark: "Not Applicable" },
      { point: "(ii) For each concession, permit or authorization granted\n\na) Eligibility criteria\n\nProcedure for getting the concession/grant and/or permits of authorizations", remark: "Not Applicable" },
    ],
  },
  {
    sNo: "2.6",
    item: "`CAG & PAC paras [F No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      { point: "(i) CAG and PAC paras and the action taken reports (ATRs) after these have been laid on the table of both houses of the parliament.", remark: "Fully Met" },
    ],
  },
];

const publicityAndPublicInterfaceData: TableRow[] = [
  {
    sNo: "3.1",
    item: "Particulars for any arrangement for consultation with or representation by the members of the public in relation to the formulation of policy or implementation there of [Section 4(1)(b)(vii)]\n\n[F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      { point: "Arrangement for consultations with or representation by the members of the public\n(i) Relevant Acts, Rules, Forms and other documents which are normally accessed by citizens", remark: "Fully met,\n www.iiitdwd.ac.in" },
      { point: "(ii) Arrangements for consultation with or representation by\n\na) Members of the public in policy formulation/ policy implementation\n\nb) Day & time allotted for visitors\n\nc) Contact details of Information & Facilitation Counter (IFC) to provide publications frequently sought by RTI applicants", remark: "Fully met,\n\nPublic Information officer: Mr.Ravi B Vitlapur, Officiating Registrar\nPhone no; 0836-2250879\nEmail: registrar@iiitdwd.ac.in" },
      { point: "Public- private partnerships (PPP)\n\n(i) Details of Special Purpose Vehicle (SPV), if any\n\n(ii) Detailed project reports (DPRs)\n\n(iii) Concession agreements\n\n(iv) Operation and maintenance manuals\n\n(v) Other documents generated as part of the implementation of the PPP\n\n(vi) Information relating to fees, tolls, or the other kinds of revenues that may be collected under authorisation from the government\n\n(vii) Information relating to outputs and outcomes\n\n(viii) The process of the selection of the private sector party (concessionaire etc.)\n\n(ix) All payment made under the PPP project", remark: "Not Applicable" },
    ],
  },
  {
    sNo: "3.2",
    item: "Are the details of policies/decisions, which affect public, informed to them [Section4(1)(c)]",
    details: [
      { point: "Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive;\n\n(i) Policy decisions/ legislations taken in the previous one year\n\n(ii) Outline the Public consultation process\n\n(iii) Outline the arrangement for consultation before formulation of policy", remark: "Not Applicable" },
    ],
  },
  {
    sNo: "3.3",
    item: "Dissemination of information widely and in such form and manner which is easily accessible to the public [Section 4(3)]",
    details: [
      { point: "Use of the most effective means of communication\n\n(i) Internet (website)", remark: "Fully Met" },
    ],
  },
  {
    sNo: "3.4",
    item: "Form of accessibility of information manual/handbook [Section 4(1)(b)]",
    details: [
      { point: "Information manual/handbook available in\n\n(i) Electronic format\n\n(ii) Electronic format", remark: "Not Applicable" },
    ],
  },
  {
    sNo: "3.5",
    item: "Whether information manual/handbook available free of cost or not [Section 4(1)(b)]",
    details: [
      { point: "List of materials available\n\n(i) Free of cost\n\n(ii) At a reasonable cost of the medium", remark: "Not Applicable" },
    ],
  },
];

const eGovernanceData: TableRow[] = [
  {
    sNo: "4.1",
    item: "Language in which Information Manual/Handbook Available [F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      { point: "(i) English", remark: "Fully Met" },
      { point: "(ii) Vernacular/ Local Language", remark: "Not Met" },
    ],
  },
  {
    sNo: "4.2",
    item: "When was the information Manual/Handbook last updated? [F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      { point: "Last date of Annual updation", remark: "Not Met" },
    ],
  },
  {
    sNo: "4.3",
    item: "Information available in electronic form [Section 4(1)(b)(xiv)]",
    details: [
      { point: "(i) Details of information available in electronic form", remark: "Details available at website.\n\nwww.iiitdwd.ac.in" },
      { point: "(ii) Name/ title of the document/record/ other information", remark: "Details available at website.\n\nwww.iiitdwd.ac.in" },
      { point: "(iii) Location where available", remark: "www.iiitdwd.ac.in" },
    ],
  },
  {
    sNo: "4.4",
    item: "Particulars of facilities available to citizen for obtaining information [Section 4(1)(b)(xv)]",
    details: [
      { point: "(i) Name & location of the faculty", remark: "www.iiitdwd.ac.in" },
      { point: "(ii) Details of information made available", remark: "Fully Met" },
      { point: "(iii) Working hours of the facility", remark: "9.30 AM- 1.00 PM" },
      { point: "(iv)  Contact person & contact details (Phone, fax email)", remark: "Fully met,\nMr. Ravi Vitlapur, Assistant\nRegistrar,(Officiating Regaistrar)" },
    ],
  },
  {
    sNo: "4.5",
    item: "Such other information as may be prescribed under section 4(i) (b)(xvii)",
    details: [
      { point: "(i) Grievance redressal mechanism", remark: "Fully Met" },
      { point: "(ii) Details of applications received under RTI and information provided", remark: "Fully Met" },
      { point: "(iii) List of completed schemes/ projects/ Programmes", remark: "Not Met" },
      { point: "(iv) List of schemes/ projects/ programme underway", remark: "Not Met" },
      { point: "(v) Details of all contracts entered into including name of the contractor, amount of contract and period of completion of contract", remark: "Not Met" },
      { point: "(vi) Annual Report", remark: "Fully met, Submitted to Ministry of Education" },
      { point: "(vii) Frequently Asked Question (FAQs)", remark: "Fully Met" },
      { point: "(viii) Any other information such as\n\na) Citizen’s Charter\n\nb) Result Framework Document (RFD)\n\nc) Six monthly reports on the\n\nd) Performance against the benchmarks set in the Citizen’s Charter", remark: "Not Met" },
    ],
  },
  {
    sNo: "4.5",
    item: "Receipt & Disposal of RTI applications & appeals [F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      { point: "(i) Details of applications received and disposed", remark: "Fully Met" },
      { point: "(ii) Details of appeals received and orders issued", remark: "Fully Met, Quarterly returns are submitted" },
    ],
  },
  {
    sNo: "4.6",
    item: "Replies to questions asked in the parliament [Section 4(1)(d)(2)]",
    details: [
      { point: "(i) Details of questions asked and replies given", remark: "Fully Met" },
    ],
  },
];

const informationAsMayBePrescribedData: TableRow[] = [
  {
    sNo: "5.1",
    item: "Such other information as may be prescribed [F.No. 1/2/2016-IR dt. 17.8.2016, F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      { point: "(i) Name & details of\n\n(a) Current CPIOs & FAAs\n\n(b) Earlier CPIO & FAAs from 1.1.2015", remark: "(a)CPIO- Mr.Ravi Vitlapur, Assistant Registrar.\n\n(b) FAA- Dr. Muruganantham Ponnusamy, Registrar" },
      { point: "(ii) Details of third party audit of voluntary disclosure\n\n(a) Dates of audit carried out\n\n(b) Report of the audit carried out", remark: "Not met" },
      { point: "(iii) Appointment of Nodal Officers not below the rank of Joint Secretary/Additional HoD\n\n(a) Date of appointment\n\n(b) Name & Designation of the officers", remark: "Not Applicable" },
      { point: "(iv) Consultancy committee of key stake holders for advice on suo-motu disclosure\n\n(a) Dates from which constituted\n\n(b) Name & Designation of the officers", remark: "Not Applicable" },
      { point: "(v) Committee of PIOs/FAAs with rich experience in RTI to identify frequently sought information under RTI\n\n(a) Dates from which constituted\n\n(b) Name & Designation of the Officers", remark: "Not Applicable" },
    ],
  },
];

const informationDisclosedOnOwnInitiativeData: TableRow[] = [
  {
    sNo: "6.1",
    item: "Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information",
    details: [
      { point: "", remark: "Partially met\nwww.iiitdwd.ac.in" },
    ],
  },
  {
    sNo: "6.2",
    item: "Guidelines for Indian Government Websites (GIGW) is followed (released in February, 2009 and included in the Central Secretariat Manual of Office Procedures (CSMOP) by Department of Administrative Reforms and Public Grievances, Ministry of Personnel, Public Grievance and Pensions, Govt. Of India)",
    details: [
      { point: "(i) Whether STQC certification obtained and its validity.\n(ii) Does the website show the certificate on the Website?", remark: "Not Applicable" },
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
