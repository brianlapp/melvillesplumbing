import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, CheckCircle2, Settings, Wrench } from "lucide-react";

const DrainCleaningPage = () => {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Unclogging Services in Windsor"
      description="Clogged drains are a common and frustrating issue for many homeowners and businesses in Windsor. Whether it's a slow-draining sink or a completely blocked sewer line, these problems can disrupt your daily routine and lead to more severe plumbing issues if left untreated. At Melville's Plumbing, we specialize in professional drain cleaning and unclogging services to ensure your plumbing system functions smoothly."
    >
      <div className="container mx-auto px-4 py-20">
        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Melville's Plumbing for Drain Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Professionals",
                description: "With over a decade of experience, our team has the expertise to tackle even the most stubborn clogs."
              },
              {
                title: "Advanced Equipment",
                description: "We use state-of-the-art tools and techniques, including hydro-jetting and camera inspections, to clear blockages effectively."
              },
              {
                title: "Prompt Service",
                description: "We understand the urgency of a clogged drain and provide fast, reliable solutions."
              },
              {
                title: "Eco-Friendly Solutions",
                description: "Our methods prioritize safety and environmental responsibility."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Drain Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Wrench,
                title: "Kitchen Drains",
                description: "Removal of grease, soap, and food debris that accumulate over time."
              },
              {
                icon: Settings,
                title: "Bathroom Drains",
                description: "Clearing blockages caused by hair, soap scum, and other materials."
              },
              {
                icon: Camera,
                title: "Sewer Lines",
                description: "Thorough cleaning of main sewer lines to prevent backups."
              },
              {
                icon: CheckCircle2,
                title: "Outdoor Drains",
                description: "Clearing leaves, dirt, and other debris from exterior drains and gutters."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Questions About Drain Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "What are the signs that I need professional drain cleaning?",
                answer: "Look for slow-draining sinks or tubs, frequent clogs in the same drains, gurgling sounds coming from pipes, unpleasant odors emanating from drains, and water backing up into sinks, tubs, or toilets."
              },
              {
                question: "What methods do you use to clean drains?",
                answer: "We use various methods including snaking/augering for minor blockages, camera inspections to locate and diagnose blockages accurately, and chemical-free solutions that are safe and eco-friendly."
              },
              {
                question: "How can I prevent future drain clogs?",
                answer: "Avoid pouring grease or oil down the sink, use drain screens to catch hair and debris, run hot water through the sink after each use, and schedule regular professional drain cleaning to prevent buildup."
              },
              {
                question: "How often should I have my drains professionally cleaned?",
                answer: "For most households, an annual drain cleaning is sufficient. Homes with heavy usage or older plumbing may benefit from more frequent cleanings."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Schedule Your Drain Cleaning Service Today</h2>
              <p className="text-gray-600 mb-6 text-center">
                Don't let clogged drains disrupt your life. Contact Melville's Plumbing today for prompt and professional drain cleaning services in Windsor. Whether it's a minor blockage or a major sewer line issue, we're here to help.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <div className="text-center">
                  <p className="font-semibold">Call/Text: 226-820-4264</p>
                  <p>Email: melvillesplumbing@gmail.com</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default DrainCleaningPage;