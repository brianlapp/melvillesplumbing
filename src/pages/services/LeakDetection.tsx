import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Settings, AlertCircle, Search, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LeakDetectionPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <ServicePageLayout
      title="Professional Leak Detection & Repair Services"
      description="Expert leak detection and repair services in Windsor. Using advanced technology to locate and fix leaks quickly and efficiently."
      backgroundImage="/heros/water-leak-detection.png"
    >
      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Our Comprehensive Leak Repair Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Initial Assessment", icon: Search },
                { title: "Leak Detection", icon: Settings },
                { title: "Repair Solutions", icon: AlertCircle },
                { title: "Professional Repairs", icon: Settings },
                { title: "Post-Repair Testing", icon: CheckCircle2 }
              ].map((step, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                  <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Types Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Common Types of Plumbing Leaks We Address</h2>
            <div className="space-y-4">
              {[
                "Pipe Leaks: Whether caused by corrosion, freezing, or wear and tear, pipe leaks can lead to significant water loss.",
                "Slab Leaks: Hidden beneath your property's foundation, slab leaks require specialized equipment and expertise to detect and repair.",
                "Faucet and Fixture Leaks: These are often easy to spot but should be addressed quickly to avoid higher water bills and potential water damage.",
                "Toilet Leaks: A leaking toilet can waste gallons of water daily and may indicate underlying plumbing issues.",
                "Appliance Leaks: Dishwashers, washing machines, and water heaters can develop leaks over time, affecting their performance and causing damage."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Choose Melville's Plumbing for Leak Detection & Repair?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "State-of-the-Art Technology", icon: Settings, description: "We use advanced equipment to detect even the most hidden leaks without unnecessary disruption to your property." },
                { title: "Experienced Professionals", icon: Shield, description: "Our team has been serving Windsor since 2012, providing reliable and honest plumbing solutions." },
                { title: "Prompt Service", icon: Clock, description: "We understand the urgency of a leak, which is why we respond quickly to prevent further damage." },
                { title: "Comprehensive Solutions", icon: CheckCircle2, description: "From detection to repair, we handle every step of the process seamlessly." }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions About Leak Detection & Repair
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I tell if I have a hidden leak?",
                answer: `Signs of a hidden leak include:
                • Unexplained increases in your water bill
                • The sound of running water when no faucets are on
                • Damp spots or water stains on walls, ceilings, or floors
                • Musty odors indicating mold or mildew
                • Reduced water pressure`
              },
              {
                question: "What tools do you use for leak detection?",
                answer: `At Melville's Plumbing, we utilize cutting-edge technology such as:
                • Acoustic Listening Devices: These detect sounds of water escaping from pipes
                • Thermal Imaging Cameras: These identify temperature changes caused by water leaks
                • Video Inspection Cameras: These allow us to inspect the inside of pipes for cracks, blockages, or leaks`
              },
              {
                question: "Can a small leak really cause major damage?",
                answer: `Yes, even small leaks can lead to:
                • Structural damage to your property
                • Mold and mildew growth, which can affect indoor air quality and health
                • Increased water bills due to wasted water
                • Potentially higher repair costs if left unresolved`
              },
              {
                question: "How long does it take to detect and repair a leak?",
                answer: "The time required depends on the leak's location and severity. Simple leaks in visible areas can often be repaired within a few hours, while hidden leaks may take longer to locate and fix. Our team works efficiently to minimize disruption to your schedule."
              },
              {
                question: "How can I prevent future leaks?",
                answer: `Preventative measures include:
                • Regular plumbing inspections to identify potential issues early
                • Insulating pipes to protect against freezing during winter
                • Avoiding the use of chemical drain cleaners, which can corrode pipes
                • Upgrading old plumbing systems with durable materials`
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Timely Repair Matters Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Timely Leak Repair Matters</h2>
            <Card className="p-6">
              <p className="text-gray-600 mb-4">Delaying leak repairs can result in:</p>
              <ul className="space-y-3">
                {[
                  "Escalated water damage, affecting walls, floors, and furniture",
                  "Increased risk of mold and mildew, which can harm your health",
                  "Higher repair costs as the problem worsens over time"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-600">
                By addressing leaks promptly, you save money and protect your property from further damage.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Serving Windsor and Surrounding Areas</h2>
            <p className="text-gray-600">
              Melville's Plumbing proudly serves Windsor and neighboring communities, including Tecumseh, 
              LaSalle, Lakeshore, Amherstburg, and more. Our local expertise ensures we understand the 
              unique plumbing challenges faced by Windsor residents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keep existing contact CTA and footer */}
      <section className="text-center py-8 md:py-16 bg-primary text-white rounded-lg mb-8 md:mb-16 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Suspect a Leak? Don't Wait!
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8">
            Contact Melville's Plumbing today for fast, reliable leak detection and repair services.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="group text-lg md:text-2xl px-6 md:px-12 py-6 md:py-8 w-full md:w-auto"
            asChild
          >
            <Link to="/contact">
              Get Expert Help Now
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default LeakDetectionPage;
