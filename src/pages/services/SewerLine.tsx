import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Droplet, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const SewerLinePage = () => {
  return (
    <ServicePageLayout
      title="Sewer Line Services in Windsor"
      description="When it comes to maintaining the health of your property's plumbing system, your sewer line plays a critical role. Our team provides comprehensive sewer line services, ensuring your system functions efficiently and reliably."
      backgroundImage="/heros/sewer-line-service.png"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* New Why Choose Section with Light Blue Background */}
        <section className="mb-16 py-16 bg-[#D3E4FD] rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Melville's Plumbing for Sewer Line Services in Windsor?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experience You Can Trust",
                  description: "With over a decade of experience, we've handled sewer line issues of all sizes and complexities."
                },
                {
                  title: "Advanced Technology",
                  description: "Our team uses state-of-the-art equipment for accurate diagnostics and efficient repairs."
                },
                {
                  title: "Customer-Centric Approach",
                  description: "We prioritize your satisfaction, offering clear communication and reliable solutions."
                },
                {
                  title: "Locally Owned & Operated",
                  description: "As a Windsor-based business, we're committed to serving our community with integrity and excellence."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-white">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Are Sewer Line Services Section with Light Gray Background */}
        <section className="mb-16 py-16 bg-[#F1F1F1] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Are Sewer Line Services?
          </h2>
          <Card className="p-6">
            <p className="text-gray-600 leading-relaxed">
              Sewer line services encompass a variety of tasks designed to keep your sewer system in top condition. 
              These include inspections, cleaning, repairs, and replacements. Regular maintenance of your sewer line 
              is essential to avoid costly repairs and to protect your home from damage caused by leaks or backups.
            </p>
          </Card>
        </section>

        {/* Our Services Section with Off-White Background */}
        <section className="mb-16 py-16 bg-[#eee] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Sewer Line Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Droplet,
                title: "Sewer Line Inspections",
                description: "Using advanced camera technology, we conduct thorough inspections of your sewer lines to identify issues like cracks, blockages, or tree root intrusions without unnecessary digging."
              },
              {
                icon: Wrench,
                title: "Sewer Line Cleaning",
                description: "Blockages can lead to slow drains and unpleasant odors. Our team uses high-pressure water jetting to remove clogs and restore the flow of your sewer system."
              },
              {
                icon: CheckCircle2,
                title: "Sewer Line Repairs",
                description: "From minor cracks to significant damage, our experts perform durable repairs to keep your sewer line functioning efficiently. We specialize in trenchless repair methods to minimize disruption."
              },
              {
                icon: Wrench,
                title: "Preventative Maintenance",
                description: "Regular maintenance helps prevent costly issues down the road. We'll schedule routine checks to ensure your sewer system remains in optimal condition."
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
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section with Soft Yellow Background */}
        <section className="mb-16 py-16 bg-[#FEF7CD] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Top 5 Questions About Sewer Line Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I know if my sewer line needs attention?",
                answer: "Common signs include slow draining sinks or tubs, frequent backups, gurgling sounds from drains, unpleasant odors near plumbing fixtures, and soggy or unusually lush areas in your yard. If you notice any of these signs, contact a professional immediately."
              },
              {
                question: "What causes sewer line issues?",
                answer: "Several factors can contribute including tree root intrusion, build-up of grease and debris, aging or corroded pipes, ground shifting or settling, and damage from construction or landscaping activities."
              },
              {
                question: "What is trenchless sewer line repair?",
                answer: "Trenchless repair is a modern method of fixing sewer lines without extensive digging. It involves inserting a new lining into the existing pipe or replacing it using minimal excavation, saving time and reducing costs."
              },
              {
                question: "How often should I schedule sewer line maintenance?",
                answer: "For most properties, annual or bi-annual sewer line inspections and cleaning are sufficient. However, if you have older pipes or a history of sewer issues, more frequent maintenance may be necessary."
              },
              {
                question: "What is the cost of sewer line repair or replacement?",
                answer: "The cost varies based on factors such as the extent of the damage, the method of repair, and the length of the affected line. We provide transparent pricing and detailed estimates before beginning any work."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Prevention Tips Section with Soft Green Background */}
        <section className="mb-16 py-16 bg-[#F2FCE2] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Prevent Sewer Line Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Be mindful of what you flush: Avoid flushing items like wet wipes, grease, or food scraps.",
              "Schedule regular maintenance: Annual inspections and cleaning can catch potential issues early.",
              "Install a backflow preventer: This device can protect your home from sewer backups.",
              "Monitor tree growth: Keep trees and shrubs away from sewer lines to prevent root intrusion.",
              "Address issues promptly: Don't ignore warning signs; immediate action can save time and money."
            ].map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{tip}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Need Expert Sewer Line Services?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't let sewer line issues disrupt your home or business. Contact Melville's Plumbing today for comprehensive sewer line services in Windsor.
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

        {/* Contact Info Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-4">
              Call/Text: <a href="tel:226-820-4264" className="text-primary hover:underline">226-820-4264</a>
            </p>
            <p className="text-xl">
              Email: <a href="mailto:melvillesplumbing@gmail.com" className="text-primary hover:underline">melvillesplumbing@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default SewerLinePage;
