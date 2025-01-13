import { Link } from "react-router-dom";
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between lg:justify-start">
        <MobileNav />
        <Link to="/" className="flex items-center space-x-2 lg:mr-6">
          <img 
            src="/lovable-uploads/header-logo.png" 
            alt="Melville's Plumbing Logo" 
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <DesktopNav />
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Phone className="h-5 w-5" />
          <span className="sr-only">Call us</span>
        </Button>
      </div>
    </header>
  );
};