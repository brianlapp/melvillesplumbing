import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Pipeline, Shield, Timer } from "lucide-react";
import { motion } from "framer-motion";

const PipeRepairPage = () => {
  return (
    <ServicePageLayout
      title="Pipe Repair & Replacement Services in Windsor"
      description="When it comes to the health of your plumbing system, the condition of your pipes is crucial. At Melville's Plumbing, we specialize in expert pipe repair and replacement services in Windsor and surrounding areas."
      backgroundImage="/lovable-uploads/IMG_2558.jpeg"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
                icon: Wrench,
                title: "Modern Techniques",
                description: "We use advanced tools and methods like trenchless pipe repair to minimize disruption to your property."
              },
              {
                icon: Shield,
                title: "Transparent Pricing",
                description: "No hidden fees—we provide upfront quotes so you know what to expect."
              },
              {
                icon: Shield,
                title: "Customer Satisfaction",
                description: "Your satisfaction is our priority. We guarantee quality workmanship and dependable results."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Pipe Issues We Address
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Leaks",
                description: "Small leaks can lead to significant water damage if not promptly addressed."
              },
              {
                title: "Corrosion",
                description: "Over time, pipes can corrode, affecting water quality and causing potential failures."
              },
              {
                title: "Cracks",
                description: "Temperature changes and wear can result in cracked pipes."
              },
              {
                title: "Clogs",
                description: "Persistent blockages may require pipe replacement if they've caused extensive damage."
              },
              {
                title: "Root Intrusion",
                description: "Tree roots can penetrate underground pipes, leading to serious disruptions."
              }
            ].map((issue, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Pipe Repair & Replacement Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Pipe Repair Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Quick and efficient leak detection and sealing</li>
                <li>• Repairing cracked or damaged pipes using advanced techniques</li>
                <li>• Addressing pinhole leaks in copper pipes</li>
                <li>• Preventative maintenance to extend the lifespan of your plumbing</li>
              </ul>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Pipe Replacement Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Replacing outdated or corroded pipes with durable materials</li>
                <li>• Upgrading old plumbing systems to meet modern standards</li>
                <li>• Trenchless pipe replacement options to minimize excavation</li>
                <li>• Installation of new pipes during remodeling or renovation projects</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Top 5 Questions About Pipe Repair & Replacement
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Pipe Repair & Replacement Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Inspection & Diagnosis",
                description: "Using advanced tools, we identify the source of the problem."
              },
              {
                title: "Recommendation",
                description: "We discuss the best solution—whether it's a targeted repair or full replacement."
              },
              {
                title: "Repair or Replacement",
                description: "Our skilled technicians carry out the work efficiently and with minimal disruption."
              },
              {
                title: "Testing & Cleanup",
                description: "We ensure everything is functioning perfectly and leave your space clean and tidy."
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
                <p className="text-gray-600">{tip}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
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

        {/* Service Area Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serving Windsor and Beyond
          </h2>
          <Card className="p-6 text-center">
            <p className="text-gray-600 leading-relaxed">
              At Melville's Plumbing, we're proud to offer top-notch pipe repair and replacement services to Windsor 
              and neighboring communities, including Tecumseh, LaSalle, Lakeshore, and Amherstburg. With our expertise 
              and commitment to excellence, you can trust us to keep your plumbing system in peak condition.
            </p>
          </Card>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default PipeRepairPage;