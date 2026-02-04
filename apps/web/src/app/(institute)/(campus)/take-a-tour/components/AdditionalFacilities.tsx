import { Shield, Sun, Utensils, Wifi } from "lucide-react";

const facilities = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Campus Connectivity",
    items: [
      "High-speed NKN internet connectivity across campus",
      "Complete Wi-Fi coverage in academic and residential zones",
      "High-performance computing clusters for research",
      "Modern IT infrastructure and cloud resources",
    ],
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Outdoor Facilities",
    items: [
      "Cricket and football grounds",
      "Volleyball and basketball courts",
      "Open-air amphitheatre",
      "Landscaped gardens and green spaces",
    ],
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Dining & Services",
    items: [
      "Multiple mess facilities with varied cuisine",
      "Private canteens and food courts",
      "Stationery and convenience stores",
      "ATM and banking services",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Support",
    items: [
      "24/7 security with CCTV surveillance",
      "On-campus medical clinic",
      "Fire safety systems throughout",
      "Student counseling services",
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
            <div key={idx} className="border-l-2 border-accent pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent">{facility.icon}</span>
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
