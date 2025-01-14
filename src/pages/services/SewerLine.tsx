import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ContactCard } from "@/components/services/ContactCard";
import { LocationsCard } from "@/components/services/LocationsCard";

const SewerLinePage = () => {
  return (
    <ServicePageLayout
      title="Sewer Line Services"
      description="Professional sewer line repair, replacement, and maintenance services in Windsor and surrounding areas."
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
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Sewer line services encompass a range of professional solutions designed to maintain, repair, 
              and replace your property's main sewer line. These services are crucial for preventing backups, 
              addressing blockages, and ensuring your plumbing system functions properly.
            </p>
          </Card>
        </section>

        {/* Our Services Section with Off-White Background */}
        <section className="mb-16 py-16 bg-[#eee] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Sewer Line Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sewer Line Inspection",
                description: "Using advanced camera technology to identify issues and assess pipe condition."
              },
              {
                title: "Sewer Line Cleaning",
                description: "Professional cleaning services to remove buildup and prevent blockages."
              },
              {
                title: "Emergency Repairs",
                description: "24/7 emergency services for sudden sewer line problems."
              },
              {
                title: "Line Replacement",
                description: "Complete sewer line replacement when repairs aren't sufficient."
              },
              {
                title: "Preventive Maintenance",
                description: "Regular maintenance to prevent costly repairs and extend system life."
              },
              {
                title: "Root Removal",
                description: "Specialized services to remove tree root intrusions from sewer lines."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How often should I have my sewer line inspected?",
                answer: "We recommend annual inspections to catch potential issues early and prevent costly repairs."
              },
              {
                question: "What are signs of sewer line problems?",
                answer: "Common signs include slow drains, gurgling sounds, sewage odors, and wet spots in your yard."
              },
              {
                question: "How long does sewer line repair take?",
                answer: "Most repairs can be completed within 1-3 days, depending on the complexity of the issue."
              },
              {
                question: "Is sewer line replacement covered by insurance?",
                answer: "Coverage varies by policy. We recommend checking with your insurance provider."
              },
              {
                question: "What causes sewer line damage?",
                answer: "Common causes include age, tree roots, ground shifting, and improper waste disposal."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Prevention Tips Section with Soft Green Background */}
        <section className="mb-16 py-16 bg-[#F2FCE2] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Prevent Sewer Line Problems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                tip: "Watch What You Flush",
                description: "Only flush toilet paper and human waste. Avoid flushing wipes, paper towels, or feminine products."
              },
              {
                tip: "Regular Maintenance",
                description: "Schedule regular inspections and cleanings to prevent buildup and catch issues early."
              },
              {
                tip: "Be Mindful of Trees",
                description: "Plant trees away from sewer lines to prevent root intrusion."
              },
              {
                tip: "Proper Disposal",
                description: "Never pour grease, oil, or harsh chemicals down your drains."
              },
              {
                tip: "Address Issues Promptly",
                description: "Don't ignore warning signs - address problems as soon as they appear."
              },
              {
                tip: "Know Your System",
                description: "Familiarize yourself with your sewer line's location and age."
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{tip.tip}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <ServiceFeatures />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ContactCard />
          <LocationsCard />
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SewerLinePage;