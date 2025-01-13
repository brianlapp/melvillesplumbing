import { Link } from "react-router-dom";
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="/lovable-uploads/header-logo.png" 
              alt="Melville's Plumbing Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <MobileNav />
        <div className="flex flex-1 items-center justify-end">
          <DesktopNav />
        </div>
      </div>
    </header>
  );
};