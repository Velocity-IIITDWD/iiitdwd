// apps/web/src/app/(other)/RTI/rti-disclosure/page.tsx
"use client";

import { useState } from "react";
import { TableDisplay, TableLink, TableRow } from "./TableDisplay"; // Ensure the path is correct

interface TableImage {
  imageURL: string;
  altText: string;
}

interface TableRowDetail {
  point: string;
  remark: string | TableImage | TableLink; // Updated to match TableDisplay.tsx
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
      {
        point: "(i) Name and address of the Organization",
        remark:
          "IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad-580009",
      },
      {
        point: "(ii) Head of the organization",
        remark: {
          links: [
            {
              text: "Dr. S. R. Mahadeva Prasanna , Director",
              url: "https://iiitdwd.ac.in/director/",
            },
          ],
        },
      },
      {
        point: "(iii) Vision, Mission and Key objectives",
        remark: {
          links: [
            { text: "https://iiitdwd.ac.in/about", url: "https://iiitdwd.ac.in/about" },
          ],
        },
      },
      {
        point: "(iv) Function and duties",
        remark: {
          text: `The functions and duties are governed by the “THE INDIAN INSTITUTES OF INFORMATION TECHNOLOGY\n(PUBLIC-PRIVATE PARTNERSHIP) ACT, 2017..\nThe links to the Act and Statutes are given below:`,
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(v) Organization Chart ",
        remark: {
          links: [
            {
              text: "Organization Chart",
              url: "https://assets.iiitdwd.ac.in/images/IIITDwd_Org_Chart.png",
            },
          ],
        },
      },
      {
        point:
          "(vi) Any other details-the genesis, inception, formation of the department and the HoDs from time to time as well as the committees/ Commissions constituted from time to time have been dealt",
        remark: {
          links: [
            { text: "Board of Governors", url: "https://iiitdwd.ac.in/governing-bodies/board" },
            { text: "Finance Committee", url: "https://iiitdwd.ac.in/governing-bodies/financial" },
            { text: "Building and Works", url: "https://iiitdwd.ac.in/governing-bodies/building" },
            { text: "Senate", url: "https://iiitdwd.ac.in/governing-bodies/senate" },
            { text: "Other Committees" },
            { text: "Internal Complaints", url: "https://assets.iiitdwd.ac.in/docs/ICC_committee.pdf" },
          ],
        },
      },
    ],
  },
  {
    sNo: "1.2",
    item: "Powers and duties of its officers and employees [Section 4(1)(b)(ii)]",
    details: [
      {
        point:
          "(i) Powers and duties of officers (administrative, financial and judicial)",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(ii) Power and duties of other employees",
        remark: "According to the post duties are assigned",
      },
      {
        point:
          "(iii) Rules/ orders under which powers and duty are derived and",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      { point: "(iv) Exercised", remark: "Yes" },
      {
        point: "(v) Work Allocation",
        remark: "As per the post work allocated",
      },
    ],
  },
  {
    sNo: "1.3",
    item: "Procedure followed in decision making process [Section 4(1)(b)(iii)]",
    details: [
      {
        point:
          "(i) Process of decision making Identify key decision making points",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(ii) Final decision making authority",
        remark: "Board of Governors",
      },
      {
        point: "(iii) Related provisions, acts, rules etc.",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(iv) Time limit for taking a decisions, if any",
        remark: "As per nature of the subject",
      },
      {
        point: "(v) Channel of supervision and accountability",
        remark: "Director / Registrar",
      },
    ],
  },
  {
    sNo: "1.4",
    item: "Norms for discharge of functions [Section 4(1)(b)(iv)]",
    details: [
      {
        point: "(i) Nature of functions/ services offered",
        remark: "To provide for instruction and research in such branches of engineering and technology, sciences and arts, as the Institute may think fit, and for the advancement of learning and dissemination of knowledge in such branches.",
      },
      {
        point: "(ii) Norms/ standards for functions/ service delivery",
        remark: "Norms and standards for various academic activities of the Institute decided by the Senate and as per [IIIT Statutes](https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf). Norms for research and development and administrative activities as per [IIIT Statutes](https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf) and decisions taken by the Board of Governors (BoG).\nThe Annual Report prepared under the direction of BoG and its annual meetings along with audited accounts, etc., of the Institute. The Annual Report of the Institute along with Audited Accounts are placed on the table of both the Houses of the Parliament.",
      },
      {
        point: "(iii) Process by which these services can be accessed",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(iv) Time-limit for achieving the targets",
        remark: "As per annual [Academic Calendar](https://assets.iiitdwd.ac.in/docs/Final_Academic_Calendar_2026-27_Higher_Semester.pdf)",
      },
      {
        point: "(v) Process of redress of grievances",
        remark: "1. Centralised Public Grievance Redress and Monitoring System\nFor details login to [CPGRAMS portal](https://pgportal.gov.in/):\nAuthorities of IIIT DHARWAD responsible for CPGRAMS:\n1) Registrar\n\n2. Internal Complaints Committee on Sexual Harassment:\nA Committee has been constituted to go into and recommend necessary steps with regard to complaints on sexual harassment and to address issues related to Prevention, Prohibition and Redressal Act 2013.\n\nInternal Complaints Committee for IIIT Dharwad is constituted by the Competent Authority with the following Members:\n[Internal Complaints Committee](https://assets.iiitdwd.ac.in/docs/ICC_committee.pdf)",
      },
    ],
  },
  {
    sNo: "1.5",
    item: "Rules, regulations, instructions manual and records for discharging functions [Section 4(1)(b)(v)]",
    details: [
      {
        point: "(i) Title and nature of the record/ manual /instruction",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point:
          "(ii) List of Rules, regulations, instructions manuals and records.",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(iii) Acts/ Rules manuals etc.",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(iv) Transfer policy and transfer orders",
        remark: "Transfer within the Institute departments are done on a need basis.",
      },
    ],
  },
  {
    sNo: "1.6",
    item: "Categories of documents held by the authority under its control [Section 4(1)(b)(vi)]",
    details: [
      {
        point: "(i) Categories of documents",
        remark: "The following are the documents held under its control.\n[IIIT Statutes](https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf)\nCertificate of GST RegistrationDSIR / Customs Duty Exemption Certificate\nPAN: AAAAI9526L\nGST: 29AAAAI9526L1Z6\nImporter-Exporter Certificate\nRecord of Degrees Awarded\nMoU\nPersonal files\nService Books\nPurchase files\nWorks files",
      },
      {
        point: "(ii) Custodian of documents/categories",
        remark: "As per Section 19 of the IIIT Dharwad, Registrar is the custodian of records, the common seal, the funds of the Institute and such other property of the Institute as the Board shall commit to his charge.",
      },
    ],
  },
  {
    sNo: "1.7",
    item: "Boards, Councils, Committees and other Bodies constituted as part of the Public Authority [Section 4(1)(b)(viii)]",
    details: [
      {
        point: "(i) Name of Boards, Council, Committee etc.",
        remark: "BoG, Senate and Finance Committee\nBoG - 10th June 2015\nSenate - ",
        rowSpan: 2,
      },
      {
        point: "(ii) Composition",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(iii) Term/ Tenure",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(iv) Powers and functions",
        remark: {
          links: [
            {
              text: "As per IIIT(PPP) Act, 23 of 9 August 2017",
              url: "https://assets.iiitdwd.ac.in//docs/iiit_ppp_2017.pdf",
            },
            {
              text: "and Statutes of IIIT Dharwad",
              url: "https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf",
            },
          ],
        },
      },
      {
        point: "(v) Whether their meetings are open to the public?",
        remark: "NO",
      },
      {
        point:
          "(vi) Whether the minutes of the meetings are open to the public?",
        remark: "Will be done shortly",
      },
      {
        point:
          "(vii) Place where the minutes if open to the public are available?",
        remark: "To Be Updated",
      },
    ],
  },
  {
    sNo: "1.8",
    item: "Directory of officers and employees [Section 4(1)(b)(ix)]",
    details: [
      {
        point: "(i) Name and designation",
        remark: "[Contact Us](https://iiitdwd.ac.in/contact)",
        rowSpan: 2,
      },
      {
        point: "(ii) Telephone , fax and email ID",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "1.9",
    item: "Monthly Remuneration received by officers & employees including system of compensation [Section 4(1)(b)(x)]",
    details: [
      {
        point: "(i) List of employees with Gross monthly remuneration",
        remark: "IIIT Dharwad follows monthly pay and allowances as per 7th CPC.",
      },
      {
        point: "(ii) System of compensation as provided in its regulations",
        remark: "As per the 7th CPC norms",
      },
    ],
  },
  {
    sNo: "1.10",
    item: "Name, designation and other particulars of public information officers [Section 4(1)(b)(xvi)]",
    details: [
      {
        point:
          "(i) Name and designation of the public information officer (PIO), Assistant Public Information (s) & Appellate Authority",
        remark: "1. Dr. S R Mahadeva Prasanna,\n    Director\n2. Mr. Ravi B Vitlapur,\nAssistant Registrar",
      },
      {
        point:
          "(ii) Address, telephone numbers and email ID of each designated official",
        remark:
          "1. Dr. S R Mahadeva Prasanna,\n    Director\n    director@iiitdwd.ac.in\n2. Mr. Ravi B Vitlapur,\nAssistant Registrar\n    assistantregistrar@iiitdwd.ac.in",
      },
    ],
  },
  {
    sNo: "1.11",
    item: "No. Of employees against whom Disciplinary action has been proposed/ taken [(Section 4(2))]",
    details: [
      {
        point:
          "No. of employees against whom disciplinary action has been\n\n(i) Pending for Minor penalty or major penalty proceedings ",
        remark:
          "Pending cases for major penalty: NIL\nPending cases for minor penalty: NIL",
      },
      {
        point: "(ii) Finalised for Minor penalty or major penalty proceedings",
        remark:
          "Finalised cases for major penalty: NIL\nFinalised cases for minor penalty: NIL",
      },
    ],
  },
  {
    sNo: "1.12",
    item: "Programmes to advance understanding of RTI [(Section 26)]",
    details: [
      {
        point: "(i) Educational programmes",
        remark: "The institute from time to time arranges in-house training for its employees.\nThe Institute also observes Vigilance Awareness Week every year. Integrity Pledge is administered to all the Employees as a part of the Vigilance Awareness Week conducted every year.\nExperts are invited regularly to deliver talks on good governance.",
        rowSpan: 3,
      },
      {
        point: "(ii) Efforts to encourage public authority to participate in these programmes",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(iii) Training of CPIO/ APIO",
        remark: "",
        hideRemark: true,
      },
      {
        point:
          "(iv) Update & publish guidelines on RTI by the Public Authorities concerned",
        remark: { text: "The Suo Moto Disclosure is available on the Institute’s Website. More information and updates on RTI are available at the following links:",
          links: [
            {
              text: "https://cic.gov.in/",
              url: "https://cic.gov.in/",
            },
            {
              text: "https://dopt.gov.in/guidelines-on-rti",
              url: "https://dopt.gov.in/guidelines-on-rti",
            },
          ],
        },
      },
    ],
  },
  {
    sNo: "1.13",
    item: "Transfer policy and transfer orders [F No. 1/6/2011- IR dt. 15.4.2013]",
    details: [{ point: "Not Applicable", remark: "Transfer within the departments/sections/centres of the Institute are done on rotational basis on need-based requirements." }],
  },
];

const budgetAndProgrammeData: TableRow[] = [
  {
    sNo: "2.1",
    item: "Budget allocated to each agency including all plans, proposed expenditure and reports on disbursements made etc. [Section 4(1)(b)(xi)]",
    details: [
      {
        point: "(i) Total Budget for the public authority",
        remark: "Please [click here](https://assets.iiitdwd.ac.in/docs/Budget_2026-27.pdf) for details",
      },
      {
        point: "(ii) Budget for each agency and plan & programmes",
        remark: "NIL",
        rowSpan: 4,
      },
      { point: "(iii) Proposed expenditures", remark: "", hideRemark: true },
      {
        point: "(iv) Revised budget for each agency, if any",
        remark: "",
        hideRemark: true,
      },
      {
        point:
          "(v) Report on disbursements made and place where the related reports are available",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "2.2",
    item: "Foreign and domestic tours (F.No. 1/8/2012-IR dt. 11.9.2012)",
    details: [
      { point: "(i) Budget", remark: "NIL" },
      {
        point:
          "(ii) Foreign and domestic Tours by ministries and officials of the rank of Joint Secretary to the Government and above, as well as the heads of the Department.\n\na) Places visited\n\nb) The period of visit\n\nc) The number of members in the official delegation\n\nd) Expenditure on the visit",
        remark: "Will be updated soon",
      },
      {
        point:
          "(iii) Information related to procurements\n\na) Notice/tender enquires, and corrigenda if any thereon,\n\nb) Details of the bids awarded comprising the names of the suppliers of goods/services being procured,\n\nc) The works contracts concluded – in any such combination of the above-and\n\nd) The rate /rates and the total amount at which such procurement or works contract is to be executed.",
        remark: "The details relating to Procurement of Goods and Services through tenders issued by the Purchase & Stores Section of the Institute. Status of Tenders are available in the link\n[https://www.iiitdwd.ac.in/tenders/](https://www.iiitdwd.ac.in/tenders/)",
      },
    ],
  },
  {
    sNo: "2.3",
    item: "Manner of execution of Subsidy programme [Section 4(i)(b)(xii)]",
    details: [
      {
        point: "(i) Name of the programme of activity",
        remark: "No such provision of grant/allocation exists.",
        rowSpan: 8,
      },
      { point: "(ii) Objective of the programme", remark: "", hideRemark: true },
      { point: "(iii) Procedure to avail benefits", remark: "", hideRemark: true },
      {
        point: "(iv) Duration of the programme/ scheme",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(v) Physical and financial targets of the programme",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(vi) Nature/ scale of subsidy /amount allotted",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(vii) Eligibility criteria for grant of subsidy",
        remark: "",
        hideRemark: true,
      },
      {
        point:
          "(viii) Details of beneficiaries of subsidy programme (number, profile etc)",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "2.4",
    item: "Discretionary and nondiscretionary grants [F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      {
        point:
          "(i) Discretionary and non-discretionary grants/ allocations to State Govt./ NGOs/other institutions",
        remark: "No such provision of grant/allocation exists",
      },
      {
        point:
          "(ii) Annual accounts of all legal entities who are provided grants by public  authorities",
        remark: "No such provision of grant/allocation exists",
      },
    ],
  },
  {
    sNo: "2.5",
    item: "Particulars of recipients of concessions, permits of authorizations granted by the public authority [Section 4(1)(b)(xiii)]",
    details: [
      {
        point:
          "(i) Concessions, permits or authorizations granted by public authority",
        remark: "IIIT Dharwad does not grant concessions, permits, or authorizations of the nature contemplated. Therefore, the eligibility criteria, procedure for grant, list of recipients, and dates of such grants are not applicable to the Institute.",
        rowSpan: 2,
      },
      {
        point:
          "(ii) For each concession, permit or authorization granted\n\na) Eligibility criteria\n\nProcedure for getting the concession/grant and/or permits of authorizations",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "2.6",
    item: "`CAG & PAC paras [F No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      {
        point:
          "(i) CAG and PAC paras and the action taken reports (ATRs) after these have been laid on the table of both houses of the parliament.",
        remark: "Will be updated soon",
      },
    ],
  },
];

const publicityAndPublicInterfaceData: TableRow[] = [
  {
    sNo: "3.1",
    item: "Particulars for any arrangement for consultation with or representation by the members of the public in relation to the formulation of policy or implementation there of [Section 4(1)(b)(vii)]\n\n[F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      {
        point:
          "(i) Relevant Acts, Rules, Forms and other documents which are normally accessed by citizens",
        remark: "Please click the following links for details.\n\n[https://assets.iiitdwd.ac.in/docs/iiit_ppp_2017.pdf](https://assets.iiitdwd.ac.in/docs/iiit_ppp_2017.pdf)\n\n[https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf](https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf)\n\nRules & Regulations:\nB. Tech, M.Tech, & Ph.D programmes –\n[https://iiitdwd.ac.in/academics/programmes/](https://iiitdwd.ac.in/academics/programmes/)\n\n– Please see\n[https://assets.iiitdwd.ac.in/docs/Final_Academic_Calendar_2026-27_Higher_Semester.pdf](https://assets.iiitdwd.ac.in/docs/Final_Academic_Calendar_2026-27_Higher_Semester.pdf)\n\nFor Curricula and Syllabi\n– Procurement Procedure: As per [General Financial Rules, 2017](https://iitgoa.ac.in/wp-content/uploads/General-Financial-Rules-2017.pdf)\n\n[Manual for Procurement of Goods](https://doe.gov.in/sites/default/files/Manual%20for%20Procurement%20of%20Goods%20%28Updated%20June%2C%202022%29.pdf)\n[Manual for Procurement of Consultancy & Services](https://doe.gov.in/sites/default/files/Manual%20for%20Procurement%20of%20Consultancy%20%26%20Other%20Services_0.pdf)\n[Manual for Procurement of Works](https://doe.gov.in/sites/default/files/Manual%20for%20Procurement%20of%20Works_0.pdf)\n\n– Academic Programme :\n[https://iiitdwd.ac.in/academics/programmes/](https://iiitdwd.ac.in/academics/programmes/)",
      },
      {
        point:
          "(ii) Arrangements for consultation with or representation by –\n(a) Members of the public in policy formulation/ policy implementation,\n(b) Day & time allotted for visitors,\n(c) Contact details of Information & Facilitation Counter (IFC) to provide publications frequently sought by RTI applicants",
        remark:
          "Periodic interaction with industry and academia to review courses, disciplines and explore industry training and research opportunities. Stakeholders are encouraged to give their feedback and suggestions through emails.",
      },
      {
        point: "Public- private partnerships (PPP)- Details of Special Purpose Vehicle (SPV), if any",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP)- Detailed project reports (DPRs)",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP)- Concession agreements.",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP)- Operation and maintenance manuals",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP) – Other documents generated as per the implementation of the PPP",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP) – Information relating to fees, tolls, or the other kinds of revenues that may be collected under authorisation from the government",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP) -Information relating to outputs and outcomes",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP) – The process of the selection of the private sector party (concessionaire etc.)",
        remark: "Not Applicable",
      },
      {
        point: "Public- private partnerships (PPP) – All payment made under the PPP project",
        remark: "Not Applicable",
      },
    ],
  },
  {
    sNo: "3.2",
    item: "Are the details of policies/decisions, which affect public, informed to them [Section4(1)(c)]",
    details: [
      {
        point:
          "Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive – Policy decisions/ legislations taken in the previous one year",
        remark: "All course details, guidelines etc. are available on public domain. Please visit [https://iiitdwd.ac.in/](https://iiitdwd.ac.in/) for details.",
      },
      {
        point:
          "Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive – Outline the Public consultation process",
        remark: "Not Applicable",
      },
      {
        point:
          "Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive-Outline the arrangement for consultation before formulation of policy",
        remark: "Not Applicable",
      },
    ],
  },
  {
    sNo: "3.3",
    item: "Dissemination of information widely and in such form and manner which is easily accessible to the public [Section 4(3)]",
    details: [
      {
        point:
          "Use of the most effective means of communication – Internet (website)",
        remark: "The information dissemination primarily happens through the Institute’s website. Please click [https://iiitdwd.ac.in](https://iiitdwd.ac.in) to visit the Institute’s website.",
      },
    ],
  },
  {
    sNo: "3.4",
    item: "Form of accessibility of information manual/handbook [Section 4(1)(b)]",
    details: [
      {
        point:
          "Information manual / handbook available in electronic format",
        remark: "The Annual Report and The Annual Accounts reports can be accessed from the website [https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf](https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf)",
        rowSpan: 2,
      },
      {
        point:
          "Information manual / handbook available in Printed format",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "3.5",
    item: "Whether information manual/handbook available free of cost or not [Section 4(1)(b)]",
    details: [
      {
        point:
          "List of materials available Free of cost",
        remark: "Please click the following links for details.\nRules & Regulations\nB.Tech: [https://iiitdwd.ac.in/academics/programmes/](https://iiitdwd.ac.in/academics/programmes/)\n\nM.Tech:\n[https://iiitdwd.ac.in/admission/m-tech/](https://iiitdwd.ac.in/admission/m-tech/)\n\nPh.D. Programs\n[https://iiitdwd.ac.in/admission/phd/](https://iiitdwd.ac.in/admission/phd/)",
      },
      {
        point:
          "List of materials available at a reasonable cost of the medium",
        remark: "Will be updated shortly",
      },
    ],
  },
];

const eGovernanceData: TableRow[] = [
  {
    sNo: "4.1",
    item: "Language in which Information Manual/Handbook Available [F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      { point: "(i) English", remark: "Annual Report of the Institute are available on the Institute website and can be accessed from the following link\n[https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf](https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf)" },
      { point: "(ii) Vernacular/ Local Language", remark: "Will be updated shortly" },
    ],
  },
  {
    sNo: "4.2",
    item: "When was the information Manual/Handbook last updated? [F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [{ point: "Last Date of Annual updating", remark: "2026" }],
  },
  {
    sNo: "4.3",
    item: "Information available in electronic form [Section 4(1)(b)(xiv)]",
    details: [
      {
        point: "Details of information available in electronic form",
        remark: "Please click the following links for details.\nInfrastructure & Development\nCampus Map: [Campus Map](https://assets.iiitdwd.ac.in/images/IIITDWDMAP.png)\nClassroom and Teaching Laboratories:\n[https://iiitdwd.ac.in/take-a-tour/](https://iiitdwd.ac.in/take-a-tour/)\nHostels:\n[https://iiitdwd.ac.in/amenities/](https://iiitdwd.ac.in/amenities/)\n\nResearch and Development facilities:\n[https://iiitdwd.ac.in/academics/research/](https://iiitdwd.ac.in/academics/research/)\n\nOther Details– are available\nInstitute website\n[https://iiitdwd.ac.in/](https://iiitdwd.ac.in/)",
      },
    ],
  },
  {
    sNo: "4.4",
    item: "Particulars of facilities available to citizen for obtaining information [Section 4(1)(b)(xv)]",
    details: [
      {
        point: "(i) Name & location of the facilities",
        remark: "Infrastructure & Development\nCampus Map: [Campus Map](https://assets.iiitdwd.ac.in/images/IIITDWDMAP.png)\nClassroom and Teaching Laboratories:\n[https://iiitdwd.ac.in/take-a-tour/](https://iiitdwd.ac.in/take-a-tour/)\nHostels:\n[https://iiitdwd.ac.in/amenities/](https://iiitdwd.ac.in/amenities/)\n\nResearch and Development facilities:\n[https://iiitdwd.ac.in/academics/research/](https://iiitdwd.ac.in/academics/research/)\n\nOther Details– are available\nInstitute website\n[https://iiitdwd.ac.in/](https://iiitdwd.ac.in/)",
        rowSpan: 2,
      },
      {
        point: "(ii) Details of information made available",
        remark: "",
        hideRemark: true,
      },
      {
        point: "(iii) Working hours of the facility",
        remark: "The facility is available during the working hours of the Institute i.e. from 9 am to 5.30 pm",
      },
      {
        point: "(iv)  Contact person & contact details (Phone, fax email)",
        remark: "Office of Registrar,\n8362250879",
      },
    ],
  },
  {
    sNo: "4.5",
    item: "Such other information as may be prescribed under section 4(i) (b)(xvii)",
    details: [
      { point: "(i) Grievance redressal mechanism", remark: "Grievances can be addressed to the Director, IIIT Dharwad or through [CPGRAMS portal](https://pgportal.gov.in/).\nInternal Complaints Committee for IIIT Dharwad is constituted by the Competent Authority with the given link below:\n[https://assets.iiitdwd.ac.in/docs/ICC_committee.pdf](https://assets.iiitdwd.ac.in/docs/ICC_committee.pdf)" },
      {
        point:
          "(ii) Details of applications received under RTI and information provided",
        remark: "The details of RTI Applications received and information provided for the year 2025-26 is as follows:",
      },
      {
        point: "(iii) List of completed schemes/ projects/ Programmes",
        remark: "[https://iiitdwd.ac.in/academics/research/](https://iiitdwd.ac.in/academics/research/)",
      },
      {
        point: "(iv) List of schemes/ projects/ programme underway",
        remark: "[https://iiitdwd.ac.in/academics/research/](https://iiitdwd.ac.in/academics/research/)",
      },
      {
        point:
          "(v) Details of all contracts entered into including name of the contractor, amount of contract and period of completion of contract",
        remark: "All the details pertaining to procurements such as tender notices, status of the procurement, etc., are available in the following link: [https://iiitdwd.ac.in/tenders/](https://iiitdwd.ac.in/tenders/)",
      },
      {
        point: "(vi) Annual Report",
        remark: "Annual Reports of the Institute can be accessed from the following link:\n[https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf](https://assets.iiitdwd.ac.in/docs/Annual_Reeport_2024-25_English__1___1_.pdf)",
      },
      { point: "(vii) Frequently Asked Question (FAQs)", remark: "[https://iiitdwd.ac.in/faq/](https://iiitdwd.ac.in/faq/)" },
      {
        point:
          "(viii) Any other information such as\n\na) Citizen’s Charter\n\nb) Result Framework Document (RFD)\n\nc) Six monthly reports on the\n\nd) Performance against the benchmarks set in the Citizen’s Charter",
        remark: "[https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf](https://assets.iiitdwd.ac.in/docs/IIIT_Dharwad_statutes.pdf)",
      },
    ],
  },
  {
    sNo: "4.6",
    item: "Receipt & Disposal of RTI applications & appeals [F.No. 1/6/2011-IR dt. 15.04.2013]",
    details: [
      {
        point: "(i) Details of applications received and disposed",
        remark: "The details of RTI Applications, Appeals received and information provided for the year 2024-25 is as follows:\n\nSHORTLY will be updated",
        rowSpan: 2,
      },
      {
        point: "(ii) Details of appeals received and orders issued",
        remark: "",
        hideRemark: true,
      },
    ],
  },
  {
    sNo: "4.7",
    item: "Replies to questions asked in the parliament [Section 4(1)(d)(2)]",
    details: [
      {
        point: "(i) Details of questions asked and replies given",
        remark: "Will be updating shortly",
      },
    ],
  },
];

const informationAsMayBePrescribedData: TableRow[] = [
  {
    sNo: "5.1",
    item: "Such other information as may be prescribed [F.No. 1/2/2016-IR dt. 17.8.2016, F.No. 1/6/2011-IR dt. 15.4.2013]",
    details: [
      {
        point:
          "(i) Name & details of\n\n(a) Current CPIOs & FAAs\n\n(b) Earlier CPIO & FAAs from 1.1.2015",
        remark:
          "(a) CPIO - Mr. Ravi B Vitlapur, Assistant Registrar & Central Public Information Officer (CPIO)\n\n(b) FAA - Dr. Satish Annigeri, Registrar",
      },
      {
        point:
          "(ii) Details of third party audit of voluntary disclosure\n\n(a) Dates of audit carried out\n\n(b) Report of the audit carried out",
        remark: "a. Date of audit carried out for the year 2024-25 is 2025",
      },
      {
        point:
          "(iii) Appointment of Nodal Officers not below the rank of Joint Secretary/Additional HoD\n\n(a) Date of appointment\n\n(b) Name & Designation of the officers",
        remark: "[https://iiitdwd.ac.in/RTI/PIO/](https://iiitdwd.ac.in/RTI/PIO/)",
      },
      {
        point:
          "(iv) Consultancy committee of key stake holders for advice on suo-motu disclosure\n\n(a) Dates from which constituted\n\n(b) Name & Designation of the officers",
        remark: "Will be updated shortly",
        rowSpan: 2,
      },
      {
        point:
          "(v) Committee of PIOs/FAAs with rich experience in RTI to identify frequently sought information under RTI\n\n(a) Dates from which constituted\n\n(b) Name & Designation of the Officers",
        remark: "",
        hideRemark: true,
      },
    ],
  },
];

const informationDisclosedOnOwnInitiativeData: TableRow[] = [
  {
    sNo: "6.1",
    item: "Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information",
    details: [
      {
        point: "Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information",
        remark: "Infrastructure & Development\nCampus Map: [Campus Map](https://assets.iiitdwd.ac.in/images/IIITDWDMAP.png)\nClassroom and Teaching Laboratories:\n[https://iiitdwd.ac.in/take-a-tour/](https://iiitdwd.ac.in/take-a-tour/)\nHostels:\n[https://iiitdwd.ac.in/amenities/](https://iiitdwd.ac.in/amenities/)\n\nResearch and Development facilities:\n[https://iiitdwd.ac.in/academics/research/](https://iiitdwd.ac.in/academics/research/)\n\nOther Details– are available\nInstitute website\n[https://iiitdwd.ac.in](https://iiitdwd.ac.in)",
      },
    ],
  },
  {
    sNo: "6.2",
    item: "Guidelines for Indian Government Websites (GIGW) is followed (released in February 2009 and included in the Central Secretariat Manual of Office Procedures (CSMOP) by Department of Administrative Reforms and Public Grievances, Ministry of Personnel, Public Grievances and Pension",
    details: [
      {
        point: "(i) Whether STQC certification obtained and its validity.",
        remark: "Not applied.",
        rowSpan: 2,
      },
      {
        point: "(ii) Does the website show the certificate on the Website?",
        remark: "",
        hideRemark: true,
      },
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
  const [selectedOption, setSelectedOption] = useState<string>(
    "organization_function"
  );

  const sidebarOptions = [
    { key: "organization_function", name: "Organisation and Functions" },
    { key: "budget_programme", name: "Budget and Programme" },
    { key: "publicity_interface", name: "Publicity and Public Interface" },
    { key: "e_governance", name: "E-Governance" },
    { key: "information_prescribed", name: "Information as may be Prescribed" },
    {
      key: "information_initiative",
      name: "Information Disclosed on own Initiative",
    },
  ];

  const currentTableData = allTableData[selectedOption] || [];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left sidebar - Updated design */}
      <div className="w-full md:w-80 bg-white shadow-lg">
        {/* Header */}
        <div className="px-6 py-8 border-b border-gray-200 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            RTI Section 4 Disclosure
          </h2>
        </div>

        {/* Sidebar Options */}
        <div className="py-4">
          {sidebarOptions.map(option => (
            <button
              key={option.key}
              onClick={() => setSelectedOption(option.key)}
              className={`w-full px-6 py-4 text-left font-bold border-b border-gray-100 cursor-pointer transition-colors ${
                selectedOption === option.key
                  ? "bg-main text-white"
                  : "bg-white text-gray-800 hover:text-white hover:bg-primary"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area for the table */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          {sidebarOptions.find(opt => opt.key === selectedOption)?.name ||
            "Information Details"}
        </h1>
        <TableDisplay data={currentTableData} />
      </div>
    </div>
  );
}
