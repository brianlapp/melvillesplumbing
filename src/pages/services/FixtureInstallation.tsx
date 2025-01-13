import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Settings, Wrench, MessageCircle, ShowerHead, Bath } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FixtureInstallationPage = () => {
  return (
    <ServicePageLayout
      title="Fixture Installation & Repair Services in Windsor"
      description="From faucets to showerheads and sinks to toilets, we provide expert installation and repair services for all your plumbing fixtures. Our experienced team ensures quality workmanship and lasting results."
      backgroundImage="/heros/fixture-installation.png"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Common Fixture Services Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Fixture Services We Provide
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Faucet Installation & Repair",
                description: "Whether you're upgrading your kitchen sink faucet or fixing a leaky one, we've got you covered. We work with all types of faucets, including touchless and pull-out models.",
                icon: Settings
              },
              {
                title: "Showerhead Installation & Repair",
                description: "From luxurious rain showerheads to efficient low-flow models, we ensure your shower delivers the perfect experience.",
                icon: ShowerHead
              },
              {
                title: "Sink Installation & Repair",
                description: "Whether it's a bathroom vanity sink or a utility sink in your laundry room, we install and repair sinks to meet your needs.",
                icon: Settings
              },
              {
                title: "Toilet Installation & Repair",
                description: "We're experts in installing new toilets, fixing running toilets, and addressing common issues like clogs and leaks.",
                icon: Settings
              },
              {
                title: "Bathtub & Whirlpool Fixture Services",
                description: "For a relaxing soak or a therapeutic experience, we handle all aspects of bathtub and whirlpool fixture installation and maintenance.",
                icon: Bath
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <section className="text-center mb-16">
          <Button 
            size="lg"
            variant="secondary"
            className="group text-lg"
            asChild
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </section>

        {/* Installation & Repair Process */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Installation Process */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Fixture Installation Process
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Initial Consultation", description: "We discuss your needs and preferences, offering expert advice on fixture options and placement." },
                    { title: "Selection Assistance", description: "If needed, we guide you in choosing fixtures that match your style, functionality, and budget." },
                    { title: "Professional Installation", description: "Our skilled team installs your fixtures with precision and care." },
                    { title: "Testing & Quality Check", description: "We test all installations to ensure proper functionality and address any issues." }
                  ].map((step, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Repair Process */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Fixture Repair Process
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Inspection & Diagnosis", description: "We thoroughly inspect the fixture to identify the problem." },
                    { title: "Repair Recommendations", description: "Our team explains the issue and provides repair options." },
                    { title: "Efficient Repairs", description: "Using quality parts and tools, we restore your fixture to optimal condition." },
                    { title: "Post-Repair Testing", description: "We ensure the fixture works perfectly before completing the job." }
                  ].map((step, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Melville's Plumbing for Fixture Installation & Repair?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Experienced Professionals", icon: Settings, description: "With over a decade of experience, we've seen it all and can handle any fixture-related challenge." },
              { title: "Quality Workmanship", icon: CheckCircle2, description: "We take pride in delivering meticulous installations and repairs that stand the test of time." },
              { title: "Honest & Reliable Service", icon: MessageCircle, description: "Our team is known for transparency and a commitment to customer satisfaction." },
              { title: "Wide Range of Expertise", icon: Wrench, description: "From kitchens to bathrooms, we handle fixtures in all areas of your home or business." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions About Fixture Installation & Repair
            </h2>
          </motion.div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "What types of fixtures can you install and repair?",
                answer: (
                  <>
                    <p className="mb-4">At Melville's Plumbing, we work with:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Kitchen faucets and sinks</li>
                      <li>Bathroom faucets, sinks, and vanities</li>
                      <li>Showerheads and bathtubs</li>
                      <li>Toilets and bidets</li>
                      <li>Laundry and utility sinks</li>
                      <li>Outdoor faucets and fixtures</li>
                    </ul>
                  </>
                )
              },
              {
                question: "How do I know if a fixture needs to be repaired or replaced?",
                answer: (
                  <>
                    <p className="mb-4">While some issues can be resolved with repairs, others may require replacement. Common signs a fixture needs repair or replacement include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Persistent leaks or drips</li>
                      <li>Rust or corrosion</li>
                      <li>Reduced water pressure</li>
                      <li>Outdated or damaged appearance</li>
                      <li>Frequent clogging or malfunctioning</li>
                    </ul>
                    <p className="mt-4">Our professionals assess the situation and recommend the most cost-effective solution.</p>
                  </>
                )
              },
              {
                question: "How long does it take to install or repair a fixture?",
                answer: (
                  <>
                    <p className="mb-4">The time required depends on the type of fixture and the complexity of the job. For example:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>A basic faucet installation may take an hour or two.</li>
                      <li>Repairing a leaky toilet could be completed within an hour.</li>
                      <li>Installing a new bathtub or shower fixture may require several hours or a full day.</li>
                    </ul>
                    <p className="mt-4">We'll provide an accurate timeline after evaluating your needs.</p>
                  </>
                )
              },
              {
                question: "Do you provide fixtures, or should I purchase them myself?",
                answer: (
                  <>
                    <p className="mb-4">We offer both options. You can:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Select fixtures through us, and we'll handle procurement and installation.</li>
                      <li>Purchase fixtures yourself, and we'll install them for you.</li>
                    </ul>
                    <p className="mt-4">We're happy to recommend high-quality, durable options to suit your style and budget.</p>
                  </>
                )
              },
              {
                question: "How can I maintain my fixtures to avoid future issues?",
                answer: (
                  <>
                    <p className="mb-4">Proper maintenance extends the life of your fixtures. Here are some tips:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Regularly clean faucets, showerheads, and sinks to prevent buildup.</li>
                      <li>Check for leaks or drips and address them promptly.</li>
                      <li>Avoid using harsh chemicals that can damage finishes.</li>
                      <li>Inspect connections and seals for wear and tear.</li>
                    </ul>
                  </>
                )
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{index + 1}. {faq.question}</h3>
                  <div className="text-gray-600">{faq.answer}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA Button */}
        <section className="text-center mb-16">
          <Button 
            size="lg"
            variant="secondary"
            className="group text-lg"
            asChild
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </section>

        {/* Service Area Section */}
        <section className="mb-16">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Serving Windsor and Surrounding Areas
            </h2>
            <p className="text-gray-600">
              Melville's Plumbing proudly serves homeowners and businesses in Windsor and neighboring communities, 
              including Tecumseh, LaSalle, Lakeshore, and Amherstburg. Our local expertise ensures we understand 
              the specific needs of our clients in the region.
            </p>
          </Card>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default FixtureInstallationPage;