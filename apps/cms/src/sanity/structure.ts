// structure.ts
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = S =>
  S.list()
    .title("Institute Management")
    .items([
      S.listItem()
        .title("Institute")
        .child(
          S.list()
            .title("Institute Management")
            .items([
              S.listItem()
                .title("About Us")
                .schemaType("about")
                .child(S.documentTypeList("about").title("About Us")),
              S.listItem()
                .title("Campus")
                .schemaType("campusData")
                .child(S.documentTypeList("campusData").title("Campus")),
              S.listItem()
                .title("Events & Awards")
                .schemaType("event")
                .child(S.documentTypeList("event").title("Events & Awards")),
              S.listItem()
                .title("Contact")
                .child(
                  S.list()
                    .title("Contact Management")
                    .items([
                      S.listItem()
                        .title("Contact Persons")
                        .schemaType("contact")
                        .child(
                          S.documentTypeList("contact").title("Contact Persons")
                        ),
                      S.listItem()
                        .title("Contact Categories")
                        .schemaType("contactCategory")
                        .child(
                          S.documentTypeList("contactCategory").title(
                            "Contact Categories"
                          )
                        ),
                      S.listItem()
                        .title("Contact Data")
                        .schemaType("contactData")
                        .child(
                          S.documentTypeList("contactData").title(
                            "Contact Data"
                          )
                        ),
                    ])
                ),
              S.listItem()
                .title("Careers")
                .schemaType("job")
                .child(S.documentTypeList("job").title("Careers")),
              S.listItem()
                .title("Tenders")
                .schemaType("tender")
                .child(
                  S.documentTypeList("tender").title("Tenders & Procurement")
                ),
            ])
        ),
      S.listItem()
        .title("Administration")
        .child(
          S.list()
            .title("Administration Management")
            .items([
              S.listItem()
                .title("Visitor")
                .schemaType("visitor")
                .child(S.documentTypeList("visitor").title("Visitor")),
              S.listItem()
                .title("Chairman")
                .schemaType("chairPerson")
                .child(S.documentTypeList("chairPerson").title("Chairman")),
              S.listItem()
                .title("Board of Governors")
                .schemaType("boardOfGovernor")
                .child(
                  S.documentTypeList("boardOfGovernor").title(
                    "Board of Governors"
                  )
                ),
              S.listItem()
                .title("The Senate")
                .schemaType("senate")
                .child(S.documentTypeList("senate").title("The Senate")),
              S.listItem()
                .title("Finance Committee")
                .schemaType("finance")
                .child(
                  S.documentTypeList("finance").title("Finance Committee")
                ),
              S.listItem()
                .title("Building & Working Committee")
                .schemaType("buildingAndWorks")
                .child(
                  S.documentTypeList("buildingAndWorks").title(
                    "Building & Working Committee"
                  )
                ),
              S.listItem()
                .title("Staff")
                .schemaType("staff")
                .child(S.documentTypeList("staff").title("Staff")),
            ])
        ),
      S.listItem()
        .title("Academics")
        .child(
          S.list()
            .title("Academic Management")
            .items([
              S.listItem()
                .title("Faculty")
                .schemaType("faculty")
                .child(S.documentTypeList("faculty").title("Faculty")),
              S.listItem()
                .title("NIRF")
                .schemaType("nirf")
                .child(S.documentTypeList("nirf").title("NIRF")),
              S.listItem()
                .title("Research")
                .schemaType("researchProfiles")
                .child(
                  S.documentTypeList("researchProfiles").title(
                    "Research Profiles"
                  )
                ),
              S.listItem()
                .title("Departments")
                .child(
                  S.list()
                    .title("Department Management")
                    .items([
                      S.listItem()
                        .title("Computer Science Engineering")
                        .schemaType("cseDetail")
                        .child(S.documentTypeList("cseDetail").title("CSE")),
                      S.listItem()
                        .title("Data Science & AI")
                        .schemaType("dsaiDetail")
                        .child(S.documentTypeList("dsaiDetail").title("DSAI")),
                      S.listItem()
                        .title("Electronics & Communication")
                        .schemaType("eceDetail")
                        .child(S.documentTypeList("eceDetail").title("ECE")),
                    ])
                ),
            ])
        ),
      S.listItem()
        .title("Home")
        .child(
          S.list()
            .title("Home Management")
            .items([
              S.listItem()
                .title("Main Carousel Images")
                .schemaType("mainCarouselImage")
                .child(
                  S.documentTypeList("mainCarouselImage").title(
                    "Main Carousel Images"
                  )
                ),
              S.listItem()
                .title("Program Cards")
                .schemaType("programCards")
                .child(
                  S.documentTypeList("programCards").title("Program Cards")
                ),
              S.listItem()
                .title("Programs")
                .schemaType("programsType")
                .child(S.documentTypeList("programsType").title("Programs")),
            ])
        ),
      S.listItem()
        .title("CGC")
        .child(
          S.list()
            .title("CGC")
            .items([
              S.listItem()
                .title("cgc")
                .schemaType("cgc")
                .child(S.documentTypeList("cgc").title("cgc")),
            ])
        ),
      S.listItem()
        .title("Student Life")
        .child(
          S.list()
            .title("Student Life Management")
            .items([
              S.listItem()
                .title("Clubs")
                .schemaType("club")
                .child(S.documentTypeList("club").title("Clubs")),
            ])
        ),
    ]);
