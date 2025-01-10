import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Settings, CheckCircle, ShowerHead } from "lucide-react";
import { motion } from "framer-motion";

const FixtureInstallationPage = () => {
  return (
    <ServicePageLayout
      title="Fixture Installation & Repair Services in Windsor"
      description="From faucets to showerheads and sinks to toilets, we provide expert installation and repair services for all your plumbing fixtures. Our experienced team ensures quality workmanship and lasting results."
      backgroundImage="/lovable-uploads/IMG_2031.jpeg"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Fixture Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ShowerHead,
                title: "Bathroom Fixtures",
                description: "Expert installation and repair of faucets, showers, toilets, and more."
              },
              {
                icon: Wrench,
                title: "Kitchen Fixtures",
                description: "Professional services for sinks, faucets, and appliance connections."
              },
              {
                icon: Settings,
                title: "Maintenance",
                description: "Regular maintenance to keep your fixtures working efficiently."
              },
              {
                icon: Wrench,
                title: "Repairs",
                description: "Quick and reliable repairs for all types of fixture issues."
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Thorough testing and quality checks for all installations."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Installation Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Initial Consultation",
                description: "We discuss your needs and preferences, offering expert advice on fixture options."
              },
              {
                title: "Professional Installation",
                description: "Our skilled team installs your fixtures with precision and care."
              },
              {
                title: "Quality Testing",
                description: "Thorough testing to ensure proper functionality and no leaks."
              },
              {
                title: "Final Inspection",
                description: "Complete review of the installation to ensure everything meets our high standards."
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Upgrade Your Fixtures?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact Melville's Plumbing today for professional fixture installation and repair services.
            </p>
            <Button 
              size="xxl"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Schedule Service Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default FixtureInstallationPage;
