export const GetFacultyDetails = `*[_type == "faculty" && facultyId == $id] {
  "id": coalesce(facultyId, "UnknownID"),
  "photo": coalesce(content.card.photo, "/images/default.jpg"),
  "content": {
    "body": {
      "profile_text": coalesce(content.body.profile_text, ""),
      "interest_areas": coalesce(content.body.interest_areas, [])
    },
    "card": {
      "position": coalesce(content.card.position, []),
      "cabin_number": coalesce(content.card.cabin_number, "?"),
      "department": coalesce(content.card.department, ""),
      "PhD": coalesce(content.card.PhD, ""),
      "mail_id": coalesce(content.card.mail_id, ""),
      "photo": coalesce(content.card.photo, "/images/default.jpg"),
      "designation": coalesce(content.card.designation, "")
    },
    "head": {
      "profile_pdf": coalesce(content.head.profile_pdf, ""),
      "name": coalesce(content.head.name, "")
    }
  }
}`;

export const GetAllFaculties = `*[_type == "faculty"] {
  "id": facultyId
}`;

export const queryFaculty = '*[_type == "faculty"]';

export const GetAllVisitors = `*[_type == "visitor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetAllStaff = `*[_type == "staff"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetAllSenate = `*[_type == "senate"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetFormerDirector = `*[_type == "formerDirector"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetChairperson = `*[_type == "chairPerson"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetBoard = `*[_type == "boardOfGovernor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetFormerBoard = `*[_type == "formerBoardOfGovernor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetAnnouncements = `*[_type == "announcement"]{
  link,
  month,
  new,
  text,
  year,
  date,
}`;

export const GetLinks = `*[_type == "linksStructure"]`;

export const GetDescription = `*[_type == "descriptionStructure"]`;

const GetAbout = `*[_type == "about"]{
  coreValues[] {
    id,
    text,
  },
}`;

export const GetResearch = `*[_type == "researchProfiles"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

export const GetResearchAdvertisement = `*[_type == "research_advertisement"]{
  time,
  lastDate,
  generalInstructions,
  applicationForm
}`;

export const GetCampusData = `*[_type == "campusData"] {
  title,
  href,
  imageUrl
}
`;

export const GetFacilities = `*[_type == "facility"] {
  title,
  blockName,
  items,
  imageUrl
}`;

export const GetKrcData = `*[_type == "krcData"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`;

export const GetKrcDataTel = `*[_type == "krcDataTel"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`;

export const GetKrcDataTelFull = `*[_type == "krcDataTelFull"] {
  heading,
  card[] {
    title,
    description,
    accessInfo,
    buttonText,
    link
  }
}`;

export const GetContactInfo = `*[_type == "contactData"][0] {
  generalQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  hostelRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  academicQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  careerGuidanceCell[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  feeRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  },
  scholarshipLoansQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          category
      }
  }
}`;

export const GetTechClubs = `*[_type == "techClub"]{
  _id,
  name,
  description,
  logo,
  image,
  memberCount,
  members[] {
    name,
    position,
    image,
  },
  alumni[] {
    name,
    position,
    image,
  },
  vision,
  mission,
  meetingDetails {
    schedule,
    location
  },
  events[] {
    title,
    description,
    images[] {
        image,
    },
    videos[] {
        video,
    },
  },
  upcomingEvents[] {
    title,
    description,
    schedule,
  },
  links {
    gmail,
    linkedin,
    instagram,
    twitter,
    website,
    github
  }
}`;

export const GetNonTechClubs = `*[_type == "nonTechClub"]{
  _id,
  name,
  description,
  logo,
  image,
  memberCount,
  members[] {
    name,
    position
  },
  alumni[] {
    name,
    position,
    image,
  },
  achievements[] {
    title,
    description,
    images[] {
        image,
    },
  meetingDetails {
    schedule,
    location
  },
  links {
    gmail,
    instagram,
    twitter
  }
}`;

export const GetCulturalClubs = `*[_type == "culturalClub"]{
  _id,
  name,
  description,
  logo,
  image,
  memberCount,
  members[] {
    name,
    position,
    image,
  },
  alumni[] {
    name,
    position,
    image,
  },
  vision,
  mission,
  meetingDetails {
    schedule,
    location
  },
  events[] {
    title,
    description,
    images[] {
        image,
    },
    videos[] {
        video,
    },
  },
  upcomingEvents[] {
    title,
    description,
    schedule,
  },
  links {
    gmail,
    linkedin,
    instagram,
    twitter,
  }
}`;

export const queryCarousel = '*[_type == "mainCarouselImage"]';
export const queryEvents = '*[_type == "event"]';
export const queryEventIds = '*[_type == "event"] {"eventId": id}';
export const queryEventById = '*[_type == "event" && id == $id][0]';
export const queryGallery = '*[_type == "gallery"]';
export const queryPrograms = '*[_type == "program"]';
export const queryReport = '*[_type == "annualReport"]';
export const queryJobs = '*[_type == "job"]';
export const queryJobCategories = '*[_type == "jobCategory"]|order(coalesce(order, 9999) asc){value, title}';
export const queryTenders = '*[_type == "tender"]';
export const queryNirfReports = '*[_type == "nirf"]';

// for migrations
export const GetContactCategory =
  '*[_type == "contactCategory"] { _id, category}';
export const GetAllContacts =
  '*[_type == "contact"]{ _id, "category": category->{category}.category }';
export const GetAllDocumentIds =
  '*[_type != "system.document" && !(_id in path("_.**"))]._id';
  