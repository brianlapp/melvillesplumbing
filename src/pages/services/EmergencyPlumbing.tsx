import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, Mail, ArrowRight, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencyPlumbingPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:226-820-4264';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      <section 
        className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/heros/emergency-plumbing.png")',
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-white bg-secondary/80 rounded-full text-sm font-medium">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emergency Plumbing Services in Windsor
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              When a plumbing emergency strikes, time is of the essence. At Melville's Plumbing, we specialize in providing prompt, reliable, and expert emergency plumbing services across Windsor and the surrounding areas. With over a decade of experience, we're here to handle your urgent plumbing needs 24/7, ensuring your home or business is protected from costly damages.
            </p>
            <Button size="lg" onClick={handleEmergencyCall} className="bg-secondary hover:bg-secondary/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now for Emergency Service
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* What is Considered Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What is Considered a Plumbing Emergency?
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            A plumbing emergency refers to any situation where immediate action is required to prevent property damage, restore essential services, or protect your health and safety. Here are some common examples:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Burst Pipes: Sudden pipe bursts can cause flooding and extensive water damage.",
              "Sewer Backups: Foul odors and wastewater entering your property indicate a critical issue.",
              "Major Leaks: Uncontrolled water leaks can damage floors, walls, and ceilings.",
              "No Hot Water: Especially during colder months, a lack of hot water can disrupt daily life.",
              "Clogged Drains: Severe blockages can render your plumbing unusable."
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-gray-600 mt-8 text-center max-w-3xl mx-auto">
            If you're unsure whether your issue qualifies as an emergency, call us, and we'll guide you on the best course of action.
          </p>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Emergency Plumbing Services
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                question: "What should I do during a plumbing emergency?",
                answer: (
                  <div>
                    <p className="mb-4">In a plumbing emergency, follow these steps to minimize damage:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Turn Off the Water Supply: Locate and shut off the main water valve to stop the flow.</li>
                      <li>Avoid Using Fixtures: Don't use toilets, sinks, or showers that are connected to the problem area.</li>
                      <li>Call a Professional Plumber: Contact Melville's Plumbing immediately for expert assistance.</li>
                      <li>Document the Damage: Take photos of the affected areas for insurance purposes.</li>
                    </ul>
                  </div>
                )
              },
              {
                question: "How quickly can Melville's Plumbing respond to an emergency?",
                answer: "We offer 24/7 emergency plumbing services and strive to arrive as quickly as possible. Our Windsor-based team is always on standby to address urgent issues, ensuring minimal disruption to your life."
              },
              {
                question: "Can I prevent plumbing emergencies?",
                answer: (
                  <div>
                    <p className="mb-4">While some emergencies are unavoidable, regular maintenance can significantly reduce the risk. Here are some tips:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Schedule annual plumbing inspections.</li>
                      <li>Address minor leaks or clogs promptly.</li>
                      <li>Insulate pipes during the winter to prevent freezing.</li>
                      <li>Avoid flushing non-degradable items down toilets.</li>
                      <li>Invest in sump pumps or backflow preventers if you're in a flood-prone area.</li>
                    </ul>
                  </div>
                )
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Melville's Plumbing for Emergency Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Team",
                description: "With over a decade of expertise, we've seen and solved every plumbing emergency imaginable."
              },
              {
                title: "24/7 Availability",
                description: "No matter the time of day or night, we're ready to assist."
              },
              {
                title: "Fast Response",
                description: "We prioritize emergencies to minimize damage and restore functionality."
              },
              {
                title: "State-of-the-Art Equipment",
                description: "Our tools and techniques ensure efficient and long-lasting solutions."
              },
              {
                title: "Customer-Centric Approach",
                description: "Your satisfaction and safety are our top priorities."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Common Emergencies Section */}
        <section className="mb-20 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Plumbing Emergencies We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Burst Pipes",
                description: "Sudden pipe bursts can lead to flooding and structural damage. We provide swift repairs to prevent further harm."
              },
              {
                title: "Clogged Drains and Toilets",
                description: "Severe clogs can disrupt your daily activities. We use advanced tools to clear blockages and restore flow."
              },
              {
                title: "Water Heater Failures",
                description: "A broken water heater can leave you without hot water. Our experts repair or replace units to restore comfort."
              },
              {
                title: "Leaking Fixtures",
                description: "Dripping faucets or leaking pipes can waste water and increase bills. We identify and fix leaks quickly."
              },
              {
                title: "Sewer Backups",
                description: "Wastewater entering your property is a health hazard. We provide comprehensive sewer line services to resolve the issue."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Tips Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips to Minimize Damage During an Emergency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Know Your Plumbing System",
                description: "Familiarize yourself with the location of the main shut-off valve and other critical components."
              },
              {
                title: "Keep Emergency Supplies Handy",
                description: "Stock up on buckets, towels, and a basic plumbing repair kit."
              },
              {
                title: "Act Quickly",
                description: "The faster you address an issue, the less damage it's likely to cause."
              },
              {
                title: "Avoid DIY Repairs",
                description: "Temporary fixes can worsen the problem. Always rely on professional plumbers."
              }
            ].map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Area Section */}
        <section className="mb-20 bg-primary text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Serving Windsor and Beyond
          </h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Melville's Plumbing proudly serves Windsor and neighboring areas, including Tecumseh, 
            LaSalle, Lakeshore, Amherstburg, and more. Our local presence ensures we understand 
            the unique plumbing challenges faced by our community.
          </p>
          <div className="text-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-white rounded-lg">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Need Emergency Plumbing Service?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't wait - contact us immediately for fast, reliable emergency plumbing service in Windsor.
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
            <div className="mt-8 text-lg">
              <p className="font-semibold">Call/Text: 226-820-4264</p>
              <p>Email: melvillesplumbing@gmail.com</p>
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default EmergencyPlumbingPage;
