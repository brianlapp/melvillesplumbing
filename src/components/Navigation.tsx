import { Link } from "react-router-dom";
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <MobileNav />

          {/* Logo with proper mobile centering */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link to="/" className="block">
              <img
                src="/lovable-uploads/header-logo.png"
                alt="Melville's Plumbing"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
};