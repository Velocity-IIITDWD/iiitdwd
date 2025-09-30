import { type SchemaTypeDefinition } from "sanity";
import {
    descriptionStructure,
    linksStructure,
    seatStructure,
} from "./academics/Admission";
import { Credit } from "./academics/Credits";
import { cseDetail } from "./academics/CSEAcademics";
import { dsaiDetail } from "./academics/DSAIAcademics";
import { eceDetail } from "./academics/ECEAcademics";
import { Faculty } from "./academics/Faculty";
import { staff } from "./academics/Staff";
import { cgc } from "./cgc/cgc";
import { About } from "./generalInfo/About";
import { chairPerson } from "./generalInfo/ChairPerson";
import {
    ContactCategory,
    ContactData,
    ContactInf,
} from "./generalInfo/ContactInfo";
import { former } from "./generalInfo/Former";
import { JobCategory } from "./generalInfo/JobCategory";
import { Jobs } from "./generalInfo/Jobs";
import { visitor } from "./generalInfo/Visitor";
import { boardOfGovernor } from "./governanceAndAdministration/BoardOfGovernor";
import { finance } from "./governanceAndAdministration/Finance";
import { formerBoardOfGovernor } from "./governanceAndAdministration/FormerBoardOfGovernor";
import { Gallery } from "./governanceAndAdministration/Gallery";
import { senate } from "./governanceAndAdministration/Senate";
import { MainCarouselImage, ProgramCards, ProgramsType } from "./home/HomePage";
import { announcementType } from "./newsAndUpdates/Announcement";
import { building_and_works } from "./newsAndUpdates/building_and_works";
import { Tender } from "./newsAndUpdates/Tenders";
import { AnnualReport } from "./reportsAndRankings/Annual_reports";
import { NIRF } from "./reportsAndRankings/Nirf";
import { krcData } from "./researchDevelopment/KrcData";
import { krcDataTel } from "./researchDevelopment/KrcDataTel";
import { krcDataTelFull } from "./researchDevelopment/KrcDataTelFull";
import {
    research,
    researchAdvertisement,
} from "./researchDevelopment/Research";
import { campusData } from "./studentLife/CampusData";
import { EventInfo } from "./studentLife/Events";
import { facilities } from "./studentLife/Facilities";
import { FacultyAdvisor, Issues, Member, Team } from "./studentLife/Magazine";
import { Club } from "./studentLife/Members";
import { student_coordinators } from "./studentLife/student_coordinators";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    research,
    researchAdvertisement,
    campusData,
    facilities,
    krcData,
    krcDataTel,
    krcDataTelFull,
    Faculty,
    senate,
    staff,
    chairPerson,
    former,
    visitor,
    boardOfGovernor,
    formerBoardOfGovernor,
    announcementType,
    linksStructure,
    seatStructure,
    descriptionStructure,
    About,
    cseDetail,
    eceDetail,
    dsaiDetail,
    Credit,
    JobCategory,
    Jobs,
    Member,
    FacultyAdvisor,
    Team,
    Issues,
    Club,
    NIRF,
    Tender,
    AnnualReport,
    ContactInf,
    ContactCategory,
    ContactData,
    EventInfo,
    Gallery,
    MainCarouselImage,
    ProgramCards,
    ProgramsType,
    building_and_works,
    cgc,
    finance,
    student_coordinators,
  ],
};
