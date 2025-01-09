import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, Mail, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const NewConstructionPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block px-6 py-2 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium animate-fade-up">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              New Construction Plumbing Services in Windsor
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Building a new home or commercial property is an exciting venture, but ensuring a reliable plumbing system is essential for long-term functionality and convenience. At Melville's Plumbing, we specialize in providing comprehensive plumbing solutions for new construction projects in Windsor and the surrounding areas.
            </p>
            <div className="mt-8">
              <Button size="xl" asChild className="animate-fade-up">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow">
        {/* What Does New Construction Plumbing Involve? Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Does New Construction Plumbing Involve?
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                New construction plumbing encompasses all aspects of planning, designing, and installing plumbing systems for a new building. This includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Blueprint Design & Collaboration",
                    description: "Working with architects and builders to integrate plumbing into the building's design seamlessly."
                  },
                  {
                    title: "Pipe Installation",
                    description: "Laying the groundwork for water supply and drainage systems."
                  },
                  {
                    title: "Fixture Placement",
                    description: "Installing sinks, toilets, showers, and other fixtures according to the blueprint."
                  },
                  {
                    title: "System Testing",
                    description: "Ensuring all systems function properly and meet local building codes."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {[
                  {
                    question: "When should I hire a plumber for my new construction project?",
                    answer: "Plumbers should be brought on board during the early stages of the project. Collaborating with architects and builders ensures the plumbing system is integrated into the overall design. Early involvement helps avoid costly revisions and ensures proper placement of pipes and fixtures."
                  },
                  {
                    question: "What should I consider when designing a plumbing system?",
                    answer: "Key factors include water pressure, pipe material selection, energy efficiency considerations, future expansion planning, and code compliance requirements."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Construction Project?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today to discuss your new construction plumbing needs and get a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="secondary" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2" />
                    Request a Quote
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="tel:226-820-4264">
                    <Phone className="mr-2" />
                    Call Us: 226-820-4264
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default NewConstructionPage;