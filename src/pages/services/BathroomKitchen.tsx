import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, LayoutGrid, Droplet, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BathroomKitchenPage = () => {
  return (
    <ServicePageLayout
      title="Bathroom & Kitchen Renovation Plumbing Services in Windsor"
      description="Transforming your home with a bathroom or kitchen renovation is an exciting process, but it also requires expert plumbing to ensure everything functions seamlessly. Our experienced team works closely with you to bring your dream space to life while ensuring the plumbing is reliable, efficient, and up to code."
      backgroundImage="/heros/bathroom-kitchen.png"
    >
      {/* Essential Plumbing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-blue-50/80 backdrop-blur-sm border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why is Professional Plumbing Essential for Renovations?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bathroom and kitchen renovations often involve more than just aesthetic upgrades. They frequently require modifications to the plumbing system, including reconfiguring pipes, installing new fixtures, and ensuring proper water flow and drainage. Poorly executed plumbing can lead to costly repairs and damage down the line. That's why hiring experienced professionals like Melville's Plumbing is essential to the success of your project.
            </p>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Bathroom & Kitchen Renovation Plumbing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Fixture Installation",
                description: "Whether it's a sleek new sink, a luxurious soaking tub, or a modern faucet, our team expertly installs all types of fixtures. We ensure proper connections and leak-free operation to keep your renovation running smoothly."
              },
              {
                icon: LayoutGrid,
                title: "Pipe Reconfiguration and Replacement",
                description: "Redesigning your space often requires reconfiguring pipes to accommodate new layouts. We assess your existing plumbing system and make the necessary modifications to ensure optimal functionality."
              },
              {
                icon: Wrench,
                title: "Appliance Hookups",
                description: "From dishwashers to garbage disposals, we provide precise installation for all kitchen appliances that require plumbing connections."
              },
              {
                icon: Droplet,
                title: "Drain and Vent Installation",
                description: "Proper drainage and ventilation are essential for preventing water buildup and ensuring efficient wastewater removal. Our team installs reliable drain and vent systems tailored to your renovation."
              },
              {
                icon: CheckCircle2,
                title: "Water Line Upgrades",
                description: "Older homes may require water line upgrades to meet the demands of modern fixtures and appliances. We ensure your water supply is consistent and sufficient for your renovated space."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-blue-50/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips for a Successful Bathroom or Kitchen Renovation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Plan Ahead",
                description: "Outline your vision, budget, and timeline before starting the project. Include plumbing considerations early to avoid unexpected delays."
              },
              {
                title: "Choose Quality Materials",
                description: "Opt for durable, high-quality fixtures and pipes that will stand the test of time."
              },
              {
                title: "Work with Professionals",
                description: "Collaborate with experienced plumbers and contractors to ensure the work is done correctly and efficiently."
              },
              {
                title: "Consider Energy Efficiency",
                description: "Incorporate water-saving fixtures and appliances to reduce utility costs."
              },
              {
                title: "Schedule Inspections",
                description: "Ensure all plumbing work is inspected and approved to meet local building codes."
              }
            ].map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center py-8 bg-white">
        <Button 
          size="xl"
          variant="secondary"
          className="group"
          asChild
        >
          <Link to="/contact">
            Get In Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Bathroom & Kitchen Renovation Plumbing
          </h2>
          <Card className="p-8 bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I plan plumbing for a renovation?</AccordionTrigger>
                <AccordionContent>
                  Planning plumbing for a renovation involves:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Identifying the placement of fixtures and appliances.</li>
                    <li>Assessing the current plumbing system's capacity.</li>
                    <li>Determining if pipes or drains need to be relocated or upgraded.</li>
                    <li>Consulting with a professional plumber early in the design process to avoid costly changes later.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What plumbing updates are common during renovations?</AccordionTrigger>
                <AccordionContent>
                  During renovations, common plumbing updates include:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Upgrading old or corroded pipes to modern materials like PEX or copper.</li>
                    <li>Installing new sinks, faucets, showers, and bathtubs.</li>
                    <li>Adding water-efficient fixtures to reduce utility bills.</li>
                    <li>Reconfiguring plumbing for new layouts or additional fixtures.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does plumbing work take in a renovation?</AccordionTrigger>
                <AccordionContent>
                  The duration of plumbing work depends on the project's complexity:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Minor updates (e.g., replacing a faucet): A few hours.</li>
                    <li>Moderate changes (e.g., relocating pipes): 1-2 days.</li>
                    <li>Full-scale renovations with major plumbing modifications: 1-2 weeks or more.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What permits are required for plumbing renovations?</AccordionTrigger>
                <AccordionContent>
                  In Windsor, plumbing work often requires permits to ensure compliance with local building codes. Melville's Plumbing handles the permitting process for you, ensuring all work meets legal requirements and passes inspections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I ensure my plumbing is energy-efficient?</AccordionTrigger>
                <AccordionContent>
                  To enhance energy efficiency, we recommend:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Installing low-flow faucets, showerheads, and toilets.</li>
                    <li>Choosing energy-efficient water heaters.</li>
                    <li>Insulating pipes to reduce heat loss.</li>
                    <li>Ensuring fixtures and appliances are properly sealed and connected.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Melville's Plumbing for Your Renovation?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Experienced Team",
                description: "With over a decade of expertise, we bring professionalism and precision to every project."
              },
              {
                title: "Customized Solutions",
                description: "We tailor our services to your unique renovation needs and goals."
              },
              {
                title: "Transparent Communication",
                description: "From start to finish, we keep you informed about progress and any potential challenges."
              },
              {
                title: "Guaranteed Quality",
                description: "Our work is backed by a commitment to excellence and customer satisfaction."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serving Windsor and Beyond
          </h2>
          <Card className="p-8 bg-white">
            <p className="text-gray-600 leading-relaxed mb-8">
              Melville's Plumbing proudly serves homeowners in Windsor, Tecumseh, LaSalle, Lakeshore, and the surrounding areas. Whether you're renovating a single bathroom or undertaking a full-scale kitchen overhaul, we're here to help you create a functional and beautiful space.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">
                Contact Us for Expert Plumbing Renovation Services
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to bring your dream bathroom or kitchen to life? Contact Melville's Plumbing today to schedule a consultation and learn how we can make your renovation stress-free and successful.
              </p>
              <Button 
                size="xl"
                variant="secondary"
                className="group"
                asChild
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default BathroomKitchenPage;
