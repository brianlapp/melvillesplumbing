import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, LayoutGrid } from "lucide-react";
import { services } from "./NavigationLinks";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="inline-flex items-center group">
            Services 
            <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-80 bg-white p-2 max-h-[calc(100vh-80px)] overflow-y-auto"
          sideOffset={8}
        >
          {services.map((category, index) => (
            <div key={category.category}>
              {index > 0 && <DropdownMenuSeparator className="my-2" />}
              <div className="px-2 py-1.5 text-sm font-semibold text-primary">
                {category.category}
              </div>
              {category.items.map((service) => (
                <DropdownMenuItem
                  key={service.path}
                  className="p-0 focus:bg-gray-50"
                >
                  <Link
                    to={service.path}
                    className="flex items-start px-2 py-2 w-full hover:text-primary transition-colors"
                  >
                    <div>
                      <div className="flex items-center">
                        {service.icon === "LayoutGrid" && <LayoutGrid className="h-4 w-4 mr-2" />}
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-50 self-center" />
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/about">
        <Button variant="ghost">About</Button>
      </Link>
      <Link to="/contact">
        <Button variant="ghost">Contact</Button>
      </Link>
      <a href="tel:226-820-4264" className="text-primary font-semibold hover:text-secondary transition-colors">
        226-820-4264
      </a>
    </div>
  );
};