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
    >
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              New Construction Plumbing Services in Windsor
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Building a new home or commercial property is an exciting venture, but ensuring a reliable plumbing system is essential for long-term functionality and convenience. At Melville's Plumbing, we specialize in providing comprehensive plumbing solutions for new construction projects in Windsor and the surrounding areas.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started with Your Project
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Does New Construction Plumbing Involve?
          </h2>
          <p className="text-gray-600 mb-6">
            New construction plumbing encompasses all aspects of planning, designing, and installing plumbing systems for a new building. Our comprehensive approach ensures every detail is considered:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Blueprint Design & Collaboration: Working with architects and builders to integrate plumbing seamlessly.",
              "Pipe Installation: Laying the groundwork for water supply and drainage systems.",
              "Fixture Placement: Installing sinks, toilets, showers, and other fixtures according to plan.",
              "System Testing: Ensuring all systems function properly and meet local codes.",
              "Final Inspections: Completing detailed evaluations to guarantee quality.",
              "Documentation: Providing complete system documentation and warranties."
            ].map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our New Construction Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "We begin with a detailed discussion of your project needs, timeline, and budget considerations."
              },
              {
                title: "Design & Planning",
                description: "Our team works with your architects and contractors to create an efficient plumbing system design."
              },
              {
                title: "Material Selection",
                description: "We help you choose the right materials and fixtures that balance quality with cost-effectiveness."
              },
              {
                title: "Installation",
                description: "Our experienced team handles the complete installation process with precision and care."
              },
              {
                title: "Testing & Inspection",
                description: "We conduct thorough testing and obtain necessary inspections to ensure everything meets code."
              },
              {
                title: "Final Walkthrough",
                description: "We review the completed work with you and provide maintenance guidance for long-term care."
              }
            ].map((step, index) => (
              <Card key={index} className="p-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your new construction plumbing needs and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Request a Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:226-820-4264">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 226-820-4264
              </a>
            </Button>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default NewConstructionPage;