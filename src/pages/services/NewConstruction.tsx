import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, Phone, Mail, Wrench, Clock, Shield, MessageSquare, ArrowRight } from "lucide-react";
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
          backgroundImage: 'url("/heros/new-construction.png")',
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block px-6 py-2 mb-6 text-white bg-secondary/80 rounded-full text-sm font-medium animate-fade-up">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              New Construction Plumbing Services in Windsor
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Building a new home or commercial property is an exciting venture, but ensuring a reliable plumbing system is essential for long-term functionality and convenience. At Melville's Plumbing, we specialize in providing comprehensive plumbing solutions for new construction projects in Windsor and the surrounding areas. From initial design to final installation, our team ensures every pipe, fixture, and system is installed with precision and care.
            </p>
            <div className="mt-8">
              <Button size="xl" asChild className="animate-fade-up bg-secondary/80 hover:bg-orange-800">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Does New Construction Plumbing Involve? Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What Does New Construction Plumbing Involve?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
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
                },
                {
                  title: "Final Inspections",
                  description: "Completing detailed evaluations to guarantee quality and compliance."
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
                  answer: "Key factors include: Water Pressure - ensuring consistent pressure throughout the property. Pipe Material - choosing durable materials like PEX or copper. Energy Efficiency - incorporating efficient fixtures and appliances. Future Expansion - planning for potential additions. Code Compliance - meeting local building regulations."
                },
                {
                  question: "How long does new construction plumbing take?",
                  answer: "The timeline depends on the size and complexity of the project. Typically, plumbing for a single-family home can take several weeks, while larger commercial projects may require a few months. Collaborating closely with your builder ensures the plumbing work aligns with the overall construction schedule."
                },
                {
                  question: "What sets Melville's Plumbing apart for new construction projects?",
                  answer: "Expert Collaboration: We work seamlessly with architects, contractors, and designers. Customized Solutions: Every system is tailored to specific needs. Local Expertise: We understand Windsor's building codes. Guaranteed Quality: Backed by over a decade of expertise."
                },
                {
                  question: "Can you handle both residential and commercial projects?",
                  answer: "Absolutely! Our team is equipped to manage plumbing installations for: Single-family homes, Multi-unit residential buildings, Retail spaces, Office buildings, Restaurants and more."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              The Melville's Plumbing Process for New Construction
            </h2>
            <div className="grid gap-8">
              {[
                {
                  title: "Consultation & Planning",
                  description: "We start with a detailed consultation to understand the scope of your project and your specific needs. Our team reviews blueprints and collaborates with other professionals involved in the build.",
                  icon: MessageSquare
                },
                {
                  title: "Design & System Layout",
                  description: "Based on the project's blueprint, we design a plumbing system that ensures efficiency and functionality. This includes planning for water supply, drainage, and fixture placement.",
                  icon: Building2
                },
                {
                  title: "Installation",
                  description: "Our skilled team installs pipes, water lines, drainage systems, and fixtures with precision, using high-quality materials to guarantee durability.",
                  icon: Wrench
                },
                {
                  title: "Testing & Inspections",
                  description: "Once installation is complete, we rigorously test all systems to ensure they function correctly. Final inspections confirm compliance with local codes and regulations.",
                  icon: Shield
                },
                {
                  title: "Post-Completion Support",
                  description: "We provide ongoing support to address any concerns and offer maintenance tips to keep your system running smoothly.",
                  icon: Clock
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <step.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Melville's Plumbing for New Construction?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experience",
                  description: "Over a decade of expertise in new construction plumbing."
                },
                {
                  title: "Reliability",
                  description: "We deliver on time and on budget, ensuring your project stays on track."
                },
                {
                  title: "Quality Materials",
                  description: "We use only the best materials to ensure longevity and performance."
                },
                {
                  title: "Transparent Communication",
                  description: "We keep you informed every step of the way."
                },
                {
                  title: "Commitment to Excellence",
                  description: "Our work is backed by a satisfaction guarantee."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
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

      {/* Common Mistakes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Common Mistakes to Avoid in New Construction Plumbing
            </h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Poor Pipe Placement",
                  description: "Improper pipe placement can lead to inefficiencies and costly repairs. Our careful planning ensures optimal placement for water flow and drainage."
                },
                {
                  title: "Ignoring Future Needs",
                  description: "Failing to account for potential expansions or upgrades can limit the system's functionality. We plan with future growth in mind."
                },
                {
                  title: "Overlooking Code Compliance",
                  description: "Non-compliance with local regulations can result in delays and fines. We ensure all installations meet Windsor's building codes."
                },
                {
                  title: "Using Low-Quality Materials",
                  description: "Subpar materials can lead to leaks and frequent repairs. We use only durable, high-quality materials for every project."
                },
                {
                  title: "Lack of Collaboration",
                  description: "Poor communication between plumbers, builders, and architects can cause significant issues. We pride ourselves on seamless collaboration."
                }
              ].map((mistake, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{mistake.title}</h3>
                      <p className="text-gray-600">{mistake.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Serving Windsor and Beyond
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              At Melville's Plumbing, we're proud to serve Windsor and neighboring communities, including Tecumseh, LaSalle, Lakeshore, Amherstburg, and more. Our local expertise ensures we understand the unique challenges and requirements of building in this region.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact Us for Your New Construction Plumbing Needs
            </h2>
            <p className="text-xl opacity-90">
              Ready to bring your construction project to life with a reliable plumbing system? Contact Melville's Plumbing today to schedule a consultation and get started on your new build.
            </p>
            <Button 
              size="xxl"
              variant="secondary"
              className="group text-2xl px-12 py-8"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="space-y-2 text-lg mt-8">
              <p className="font-semibold">Call/Text: 226-820-4264</p>
              <p>Email: melvillesplumbing@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default NewConstructionPage;