import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Settings, Shield, Timer, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PipeRepairPage = () => {
  const faqItems = [
    {
      question: "How do I know if my pipes need to be repaired or replaced?",
      answer: "Signs like frequent leaks, reduced water pressure, rusty or discolored water, and persistent clogs often indicate pipe issues. During our inspection, we'll assess the condition of your pipes and recommend repair or replacement based on the extent of the damage."
    },
    {
      question: "What is trenchless pipe repair?",
      answer: "Trenchless pipe repair is a minimally invasive method to repair or replace pipes without extensive digging. Techniques like pipe lining or pipe bursting allow us to fix issues with less disruption to your property, saving time and costs."
    },
    {
      question: "How long does a pipe replacement take?",
      answer: "The duration depends on factors like the extent of the damage, the material of the pipes, and the complexity of the plumbing system. Most repairs are completed within a day, while larger replacement projects may take longer."
    },
    {
      question: "What types of pipes do you work with?",
      answer: "We work with a variety of materials, including PVC, copper, PEX, galvanized steel, and cast iron. We'll recommend the best material for your specific needs and budget."
    },
    {
      question: "How much does pipe repair or replacement cost?",
      answer: "Costs vary based on the scope of the project, pipe material, and labor required. At Melville's Plumbing, we provide transparent, upfront quotes after evaluating your plumbing system."
    }
  ];

  return (
    <ServicePageLayout
      title="Pipe Repair & Replacement Services in Windsor"
      description="When it comes to maintaining the health of your property's plumbing system, your sewer line plays a critical role. Our team provides comprehensive sewer line services, ensuring your system functions efficiently and reliably."
      backgroundImage="/heros/pipe-repair.png"
      faqItems={faqItems}
    >
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Pipe Repair & Replacement Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6">Pipe Repair Services</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Quick and efficient leak detection and sealing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Repairing cracked or damaged pipes using advanced techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Addressing pinhole leaks in copper pipes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Preventative maintenance to extend the lifespan of your plumbing</span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6">Pipe Replacement Services</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Replacing outdated or corroded pipes with durable materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Upgrading old plumbing systems to meet modern standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Trenchless pipe replacement options to minimize excavation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Installation of new pipes during remodeling or renovation projects</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Common Pipe Issues We Address
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Leaks", description: "Small leaks can lead to significant water damage if not promptly addressed." },
                  { title: "Corrosion", description: "Over time, pipes can corrode, affecting water quality and causing potential failures." },
                  { title: "Cracks", description: "Temperature changes and wear can result in cracked pipes." },
                  { title: "Clogs", description: "Persistent blockages may require pipe replacement if they've caused extensive damage." },
                  { title: "Root Intrusion", description: "Tree roots can penetrate underground pipes, leading to serious disruptions." }
                ].map((issue, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-4">{issue.title}</h3>
                    <p className="text-gray-600">{issue.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center py-8">
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            <Link to="/contact" className="group">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                The Pipe Repair & Replacement Process
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: "Inspection & Diagnosis", description: "Using advanced tools, we identify the source of the problem." },
                  { title: "Recommendation", description: "We discuss the best solution—whether it's a targeted repair or full replacement." },
                  { title: "Repair or Replacement", description: "Our skilled technicians carry out the work efficiently and with minimal disruption." },
                  { title: "Testing & Cleanup", description: "We ensure everything is functioning perfectly and leave your space clean and tidy." }
                ].map((step, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Melville's Plumbing for Pipe Repairs & Replacement?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: Timer,
                    title: "Experienced Team",
                    description: "Since 2012, we've been providing exceptional plumbing services, earning the trust of countless Windsor homeowners and businesses."
                  },
                  {
                    icon: Settings,
                    title: "Modern Techniques",
                    description: "We use advanced tools and methods like trenchless pipe repair to minimize disruption to your property."
                  },
                  {
                    icon: Shield,
                    title: "Transparent Pricing",
                    description: "No hidden fees—we provide upfront quotes so you know what to expect."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Customer Satisfaction",
                    description: "Your satisfaction is our priority. We guarantee quality workmanship and dependable results."
                  }
                ].map((feature, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top 5 Questions About Pipe Repair & Replacement
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center py-8">
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            <Link to="/contact" className="group">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Prevention Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Preventing Future Pipe Problems
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Schedule regular plumbing inspections",
                  "Avoid using harsh chemicals to clear clogs",
                  "Insulate pipes to protect them from freezing in winter",
                  "Monitor water pressure to prevent undue stress on pipes",
                  "Replace old pipes proactively before major issues arise"
                ].map((tip, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-left">{tip}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Serving Windsor and Beyond
              </h2>
              <p className="text-gray-600 text-center">
                At Melville's Plumbing, we're proud to offer top-notch pipe repair and replacement services to Windsor 
                and neighboring communities, including Tecumseh, LaSalle, Lakeshore, and Amherstburg. With our expertise 
                and commitment to excellence, you can trust us to keep your plumbing system in peak condition.
              </p>
            </Card>
          </div>
        </section>

        {/* Keep existing Contact CTA */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Expert Pipe Repair & Replacement?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't let pipe problems disrupt your day. Contact Melville's Plumbing for fast and reliable service in Windsor.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default PipeRepairPage;
