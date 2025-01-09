import { ServiceCard } from "./ServiceCard";
import { Clock, Droplet, Wrench, Home, Droplets, Search, PenLine, Shield, Trash2, Construction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Emergency Plumbing Services",
    description: "Available 24/7 to tackle burst pipes, major leaks, and sewer backups. No matter the time, we'll be there to protect your property and restore your plumbing.",
    slug: "emergency-plumbing"
  },
  {
    icon: Construction,
    title: "New Construction Plumbing",
    description: "Building a new home or commercial property? Our team collaborates with builders and contractors to deliver complete plumbing solutions for new construction projects.",
    slug: "new-construction"
  },
  {
    icon: Wrench,
    title: "Sump Pump Installation & Maintenance",
    description: "Protect your home from flooding with our reliable sump pump services. We install, maintain, and repair sump pumps to keep your basement dry and your property safe.",
  },
  {
    icon: Home,
    title: "Bathroom & Kitchen Renovations",
    description: "Planning a renovation? Let us handle the plumbing. From installing new fixtures to reconfiguring pipes, we provide expert support for your bathroom or kitchen remodel.",
  },
  {
    icon: Droplet,
    title: "Water Heater Installation & Repair",
    description: "Whether you need a new water heater installed or your current unit repaired, we've got you covered. We specialize in tank and tankless water heaters, ensuring you always have access to hot water when you need it.",
  },
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "Using state-of-the-art detection methods, we quickly locate and repair leaks to prevent costly water damage to your home or business.",
  },
  {
    icon: PenLine,
    title: "Fixture Installation & Repair",
    description: "From faucets to showers, upgrading or fixing fixtures can transform your space. We install and repair high-quality fixtures to enhance the functionality and style of your bathroom or kitchen.",
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    description: "Damaged pipes can disrupt your plumbing system and lead to costly repairs. We're experts in repairing or replacing pipes, ensuring your system operates efficiently.",
  },
  {
    icon: Droplets,
    title: "Sewer Line Services",
    description: "We provide comprehensive sewer line inspections, repairs, and replacements. Whether you're dealing with a blockage or need a new line installed, our team ensures your sewer system is functioning properly.",
  },
  {
    icon: Shield,
    title: "Backflow Prevention Installation",
    description: "Keep your water supply safe from contamination with our professional backflow prevention installation services. We ensure your system complies with local regulations and operates efficiently.",
  },
  {
    icon: Trash2,
    title: "Drain Cleaning & Unclogging",
    description: "Our expert team uses advanced tools and techniques to clear blockages and ensure your plumbing flows smoothly.",
  }
];

export const ServicesList = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-white shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Serving Windsor and Beyond
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Melville's Plumbing proudly serves Windsor and surrounding communities. 
          We understand the unique plumbing challenges in our region, and we're here 
          to provide personalized solutions that last.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="text-primary font-semibold text-lg mb-4">Local Areas Served:</h4>
          <div className="space-y-3">
            {["Windsor", "Tecumseh", "LaSalle", "Amherstburg"].map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700 font-medium">And more surrounding areas</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};