import {
  BookOpen,
  Building2,
  GraduationCap,
  Heart,
  Home,
  Lightbulb,
  Users,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "m-block", label: "M Block", icon: <Lightbulb className="w-4 h-4" /> },
  {
    id: "pi-block",
    label: "Pi Block",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "e-block",
    label: "E Block",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  { id: "library", label: "Library", icon: <BookOpen className="w-4 h-4" /> },
  { id: "b-block", label: "B Block", icon: <Home className="w-4 h-4" /> },
  { id: "g-block", label: "G Block", icon: <Users className="w-4 h-4" /> },
  { id: "h-block", label: "H Block", icon: <Heart className="w-4 h-4" /> },
];

const BlockNavigation = () => {
  const scrollToBlock = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="py-6 border-b section-border bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-widest text-body-muted font-sans font-medium hidden md:block">
            Quick Navigation
          </h2>
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto justify-start md:justify-end">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToBlock(item.id)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-body hover:text-heading hover:bg-secondary rounded transition-colors whitespace-nowrap font-sans"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlockNavigation;
