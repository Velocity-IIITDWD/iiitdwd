import { Dumbbell, Shield, Utensils, Volleyball, Wifi } from "lucide-react";

const facilities = [
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Dining & Services",
    items: [
      "Mess and a private canteen with diverse cuisine",
      "Clean and hygienic food preparation areas",
      "Affordable meal plans for students (Private Canteen)",
      "Special dietary options available",
      "Stationery and convenience stores",
    ],
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Gymnasium & Badminton Court",
    items: [
      "Well-equipped gymnasium with modern fitness equipment",
      "Professional-grade badminton court",
    ],
  },
  {
    icon: <Volleyball className="w-6 h-6" />,
    title: "Sports Area",
    items: [
      "Cricket Nets and football ground",
      "Volleyball and basketball courts (M Block)",
      "Carroms and Table Tennis facilities (M Block)",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Support",
    items: [
      "24/7 security with CCTV surveillance",
      "On-campus medical clinic (H Block)",
    ],
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connectivity & Amenities",
    items: [
      "High-speed Wi-Fi across the campus",
      "Power backup and water supply systems",
    ],
  },
];

const AdditionalFacilities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-heading mb-4">
            Beyond the Blocks
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Comprehensive infrastructure supporting every aspect of campus life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {facilities.map((facility, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{facility.icon}</span>
                <h3 className="text-xl font-semibold text-heading font-sans">
                  {facility.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {facility.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-body"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-body-muted flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFacilities;
