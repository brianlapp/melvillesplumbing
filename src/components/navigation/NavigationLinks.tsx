import { Link } from "react-router-dom";

export interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}

export const navigationLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Emergency Plumbing", href: "/services/emergency-plumbing" },
      { name: "Drain Cleaning", href: "/services/drain-cleaning" },
      { name: "Water Heater Service", href: "/services/water-heater" },
      { name: "Pipe Repair", href: "/services/pipe-repair" },
      { name: "Leak Detection", href: "/services/leak-detection" },
      { name: "Backflow Prevention", href: "/services/backflow-prevention" },
      { name: "Fixture Installation", href: "/services/fixture-installation" },
      { name: "Bathroom & Kitchen", href: "/services/bathroom-kitchen" },
      { name: "Sump Pump Service", href: "/services/sump-pump" },
      { name: "Sewer Line Service", href: "/services/sewer-line" },
      { name: "New Construction", href: "/services/new-construction" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const NavLinks = () => {
  return (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="text-gray-700 hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};