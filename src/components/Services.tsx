import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Droplet, PumpIcon } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Emergency Plumbing Services",
    description: "Available 24/7 to handle plumbing emergencies.",
  },
  {
    icon: Droplet,
    title: "Water Heater Services",
    description: "Expert installation, repair, and replacement for tank and tankless water heaters.",
  },
  {
    icon: PumpIcon,
    title: "Sump Pump Installation & Maintenance",
    description: "Keep your basement dry and prevent flooding.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional plumbing services for all your residential and commercial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};