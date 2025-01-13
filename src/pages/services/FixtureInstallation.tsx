import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Settings, Wrench, ShowerHead, Bath } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FixtureInstallationPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <ServicePageLayout
      title="Fixture Installation & Repair Services in Windsor"
      description="From faucets to showerheads and sinks to toilets, we provide expert installation and repair services for all your plumbing fixtures. Our experienced team ensures quality workmanship and lasting results."
      backgroundImage="/heros/fixture-installation.png"
    >
      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Common Fixture Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Faucet Installation", icon: Settings, description: "Upgrading or fixing all types of faucets" },
                { title: "Showerhead Services", icon: ShowerHead, description: "From rain to low-flow models" },
                { title: "Sink Installation", icon: Settings, description: "Bathroom, kitchen & utility sinks" },
                { title: "Toilet Services", icon: Settings, description: "Installation & repairs" },
                { title: "Bathtub Services", icon: Bath, description: "Complete installation & maintenance" }
              ].map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation & Repair Process */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Installation Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Our Fixture Installation Process</h2>
              <div className="space-y-4">
                {[
                  { title: "Initial Consultation", description: "We discuss your needs and preferences, offering expert advice on fixture options and placement." },
                  { title: "Selection Assistance", description: "If needed, we guide you in choosing fixtures that match your style, functionality, and budget." },
                  { title: "Professional Installation", description: "Our skilled team installs your fixtures with precision and care." },
                  { title: "Testing & Quality Check", description: "We test all installations to ensure proper functionality and address any issues." }
                ].map((step, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Repair Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Our Fixture Repair Process</h2>
              <div className="space-y-4">
                {[
                  { title: "Inspection & Diagnosis", description: "We thoroughly inspect the fixture to identify the problem." },
                  { title: "Repair Recommendations", description: "Our team explains the issue and provides repair options." },
                  { title: "Efficient Repairs", description: "Using quality parts and tools, we restore your fixture to optimal condition." },
                  { title: "Post-Repair Testing", description: "We ensure the fixture works perfectly before completing the job." }
                ].map((step, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Choose Melville's Plumbing for Fixture Installation & Repair?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Experienced Professionals", icon: Settings, description: "With over a decade of experience, we've seen it all and can handle any fixture-related challenge." },
                { title: "Quality Workmanship", icon: Wrench, description: "We take pride in delivering meticulous installations and repairs that stand the test of time." },
                { title: "Honest & Reliable Service", icon: CheckCircle2, description: "Our team is known for transparency and a commitment to customer satisfaction." },
                { title: "Wide Range of Expertise", icon: ShowerHead, description: "From kitchens to bathrooms, we handle fixtures in all areas of your home or business." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions About Fixture Installation & Repair
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of fixtures can you install and repair?</AccordionTrigger>
                <AccordionContent>
                  At Melville's Plumbing, we work with:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Kitchen faucets and sinks</li>
                    <li>Bathroom faucets, sinks, and vanities</li>
                    <li>Showerheads and bathtubs</li>
                    <li>Toilets and bidets</li>
                    <li>Laundry and utility sinks</li>
                    <li>Outdoor faucets and fixtures</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do I know if a fixture needs to be repaired or replaced?</AccordionTrigger>
                <AccordionContent>
                  While some issues can be resolved with repairs, others may require replacement. Common signs a fixture needs repair or replacement include:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Persistent leaks or drips</li>
                    <li>Rust or corrosion</li>
                    <li>Reduced water pressure</li>
                    <li>Outdated or damaged appearance</li>
                    <li>Frequent clogging or malfunctioning</li>
                  </ul>
                  Our professionals assess the situation and recommend the most cost-effective solution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How long does it take to install or repair a fixture?</AccordionTrigger>
                <AccordionContent>
                  The time required depends on the type of fixture and the complexity of the job. For example:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>A basic faucet installation may take an hour or two</li>
                    <li>Repairing a leaky toilet could be completed within an hour</li>
                    <li>Installing a new bathtub or shower fixture may require several hours or a full day</li>
                  </ul>
                  We'll provide an accurate timeline after evaluating your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide fixtures, or should I purchase them myself?</AccordionTrigger>
                <AccordionContent>
                  We offer both options. You can:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Select fixtures through us, and we'll handle procurement and installation</li>
                    <li>Purchase fixtures yourself, and we'll install them for you</li>
                  </ul>
                  We're happy to recommend high-quality, durable options to suit your style and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How can I maintain my fixtures to avoid future issues?</AccordionTrigger>
                <AccordionContent>
                  Proper maintenance extends the life of your fixtures. Here are some tips:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Regularly clean faucets, showerheads, and sinks to prevent buildup</li>
                    <li>Check for leaks or drips and address them promptly</li>
                    <li>Avoid using harsh chemicals that can damage finishes</li>
                    <li>Inspect connections and seals for wear and tear</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Serving Windsor and Surrounding Areas</h2>
            <p className="text-gray-600">
              Melville's Plumbing proudly serves Windsor and neighboring communities, including Tecumseh, 
              LaSalle, Lakeshore, Amherstburg, and more. Our local expertise ensures we understand the 
              unique plumbing challenges faced by Windsor residents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep existing contact CTA and footer */}
        <section className="text-center mb-16">
          <Button 
            size="lg"
            variant="secondary"
            className="group text-lg"
            asChild
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </section>
    </ServicePageLayout>
  );
};

export default FixtureInstallationPage;
