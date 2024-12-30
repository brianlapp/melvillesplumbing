import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Wrench, Droplet, Home, ShowerHead, Shield, Trash2 } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing Services",
    description: "24/7 availability for burst pipes, leaks, and other plumbing emergencies.",
  },
  {
    icon: Home,
    title: "New Construction Plumbing",
    description: "Complete plumbing solutions for new homes and commercial properties.",
  },
  {
    icon: Wrench,
    title: "Sump Pump Installation & Maintenance",
    description: "Professional installation and maintenance to prevent basement flooding.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom & Kitchen Renovations",
    description: "Expert plumbing services for your renovation projects.",
  },
  {
    icon: Droplet,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance for all types of water heaters.",
  },
  {
    icon: Droplet,
    title: "Leak Detection & Repair",
    description: "Advanced techniques to locate and fix leaks quickly.",
  },
  {
    icon: Wrench,
    title: "Fixture Installation & Repair",
    description: "Professional installation and repair of all plumbing fixtures.",
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    description: "Comprehensive pipe services from minor repairs to full replacements.",
  },
  {
    icon: Wrench,
    title: "Sewer Line Services",
    description: "Complete sewer line inspection, repair, and replacement services.",
  },
  {
    icon: Shield,
    title: "Backflow Prevention & Testing",
    description: "Protecting your water supply with professional backflow services.",
  },
  {
    icon: Trash2,
    title: "Drain Cleaning & Unclogging",
    description: "Effective solutions for all your drain cleaning needs.",
  },
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Plumbing Services in Windsor
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
                we provide a full range of professional services to meet your residential and commercial 
                plumbing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Experienced Team
                  </CardTitle>
                  <CardDescription>
                    With over a decade of hands-on experience, we bring expertise to every job.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Honest & Reliable
                  </CardTitle>
                  <CardDescription>
                    Our reputation is built on trust and transparency.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Locally Owned
                  </CardTitle>
                  <CardDescription>
                    We understand Windsor's unique plumbing needs and challenges.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Guaranteed Satisfaction
                  </CardTitle>
                  <CardDescription>
                    We stand behind our work to ensure your peace of mind.
                  </CardDescription>
                </CardHeader>
              </Card>
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

            <div className="text-center mt-16">
              <Button size="lg" variant="default">
                Contact us today for expert plumbing services!
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </motion.div>
  );
};

export default ServicesPage;