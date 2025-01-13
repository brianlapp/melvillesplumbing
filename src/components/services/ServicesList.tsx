import { ServiceCard } from "./ServiceCard";
import { Clock, Droplet, Wrench, Home, Droplets, Search, PenLine, Shield, Trash2, Construction } from "lucide-react";
import { motion } from "framer-motion";

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
    slug: "sump-pump"
  },
  {
    icon: Home,
    title: "Bathroom & Kitchen Renovations",
    description: "Planning a renovation? Let us handle the plumbing. From installing new fixtures to reconfiguring pipes, we provide expert support for your bathroom or kitchen remodel.",
    slug: "bathroom-kitchen"
  },
  {
    icon: Droplet,
    title: "Water Heater Installation & Repair",
    description: "Whether you need a new water heater installed or your current unit repaired, we've got you covered. We specialize in tank and tankless water heaters, ensuring you always have access to hot water when you need it.",
    slug: "water-heater"
  },
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "Using state-of-the-art detection methods, we quickly locate and repair leaks to prevent costly water damage to your home or business.",
    slug: "leak-detection"
  },
  {
    icon: PenLine,
    title: "Fixture Installation & Repair",
    description: "From faucets to showers, upgrading or fixing fixtures can transform your space. We install and repair high-quality fixtures to enhance the functionality and style of your bathroom or kitchen.",
    slug: "fixture-installation"
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    description: "Damaged pipes can disrupt your plumbing system and lead to costly repairs. We're experts in repairing or replacing pipes, ensuring your system operates efficiently.",
    slug: "pipe-repair"
  },
  {
    icon: Droplets,
    title: "Sewer Line Services",
    description: "We provide comprehensive sewer line inspections, repairs, and replacements. Whether you're dealing with a blockage or need a new line installed, our team ensures your sewer system is functioning properly.",
    slug: "sewer-line"
  },
  {
    icon: Shield,
    title: "Backflow Prevention Installation",
    description: "Keep your water supply safe from contamination with our professional backflow prevention installation services. We ensure your system complies with local regulations and operates efficiently.",
    slug: "backflow-prevention"
  },
  {
    icon: Trash2,
    title: "Drain Cleaning & Unclogging",
    description: "Our expert team uses advanced tools and techniques to clear blockages and ensure your plumbing flows smoothly.",
    slug: "drain-cleaning"
  }
];

export const ServicesList = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mx-auto bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-lg font-semibold mb-12"
        >
          Our Professional Plumbing Services
        </motion.div>
      </div>
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