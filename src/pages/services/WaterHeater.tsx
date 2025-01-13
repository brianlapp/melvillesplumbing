import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Banknote, Gauge, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WaterHeaterPage = () => {
  return (
    <ServicePageLayout
      title="Water Heater Installation & Repair Services in Windsor"
      description="From installation to repairs and maintenance, our expert team provides comprehensive water heater services to keep your home comfortable and efficient."
      backgroundImage="/heros/water-heater-service.png"
    >
      {/* Our Services Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-blue-50/80 backdrop-blur-sm border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Water Heater Services
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Water Heater Installation",
                  description: "Whether you're upgrading to a new model or installing a water heater for the first time, we provide seamless installation services. We'll help you select the right unit for your needs and ensure it's installed correctly and safely."
                },
                {
                  title: "Water Heater Repairs",
                  description: "If your water heater isn't working properly, our skilled technicians can diagnose and fix the issue. From faulty thermostats to leaking tanks, we'll get your system back up and running."
                },
                {
                  title: "Tankless Water Heater Services",
                  description: "Enjoy energy savings and endless hot water with our tankless water heater installation and maintenance services. We'll guide you through the benefits and ensure your unit performs at its best."
                },
                {
                  title: "Water Heater Maintenance",
                  description: "Prevent unexpected breakdowns with our routine maintenance services. We'll flush the tank, inspect components, and address potential issues before they become major problems."
                },
                {
                  title: "Emergency Water Heater Services",
                  description: "When your water heater fails, you don't have to wait. Our team provides prompt emergency services to restore your hot water supply as quickly as possible."
                }
              ].map((service, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="p-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Upgrade Your Water Heater?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Upgrading your water heater can improve your home's comfort and efficiency:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Lower Utility Bills</h3>
                <p className="text-gray-600 text-center">
                  Modern units use less energy, saving you money.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Better Performance</h3>
                <p className="text-gray-600 text-center">
                  Enjoy consistent water temperature and pressure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly Options</h3>
                <p className="text-gray-600 text-center">
                  Choose energy-efficient models to reduce your environmental footprint.
                </p>
              </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Types of Water Heaters Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Water Heaters We Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Traditional Tank Water Heaters",
                description: "Reliable and cost-effective solutions for homes and businesses."
              },
              {
                title: "Tankless Water Heaters",
                description: "Energy-efficient units that provide hot water on demand."
              },
              {
                title: "Gas Water Heaters",
                description: "Efficient models powered by natural gas."
              },
              {
                title: "Electric Water Heaters",
                description: "Easy-to-install units with consistent performance."
              }
            ].map((type, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Melville's Plumbing for Water Heater Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Expertise You Can Trust",
                description: "With over 10 years of plumbing experience, our team delivers top-quality service."
              },
              {
                title: "Prompt & Reliable Service",
                description: "Whether you need a repair or a new installation, we're here to help quickly and efficiently."
              },
              {
                title: "Comprehensive Solutions",
                description: "We handle all types of water heaters, including tank and tankless models."
              },
              {
                title: "Customer Satisfaction Guaranteed",
                description: "Your comfort and convenience are our top priorities."
              }
            ].map((reason, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions About Water Heater Installation & Repair
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "How do I know if I need to replace my water heater?",
                answer: [
                  "Signs that you may need a new water heater include:",
                  "Age: Most traditional water heaters last 8-12 years. If yours is older, it may be time for a replacement.",
                  "Inefficiency: Rising energy bills or inconsistent water temperature could indicate that your unit is not working efficiently.",
                  "Leaks: Visible water leaks around your water heater are a clear sign of trouble.",
                  "Rusty Water: Discolored water from your taps may signal corrosion inside the tank.",
                  "Frequent Repairs: If you're calling for repairs more often, a replacement might be more cost-effective."
                ]
              },
              {
                question: "What are the benefits of upgrading to a tankless water heater?",
                answer: [
                  "Tankless water heaters provide several advantages:",
                  "Energy Efficiency: They heat water on demand, reducing energy waste.",
                  "Space-Saving Design: Compact units free up storage space in your home.",
                  "Unlimited Hot Water: Enjoy continuous hot water, even during high-demand periods.",
                  "Longer Lifespan: Tankless models often last longer than traditional tank water heaters."
                ]
              },
              {
                question: "How long does it take to install a water heater?",
                answer: [
                  "The installation time depends on the type of water heater and the complexity of the job:",
                  "Traditional Tank Models: Typically take 2-3 hours for a straightforward installation.",
                  "Tankless Models: May take 4-6 hours or longer due to additional electrical or gas line requirements."
                ]
              },
              {
                question: "What should I do if my water heater stops working?",
                answer: [
                  "If your water heater stops working:",
                  "Check the Power Source: Ensure the unit is receiving power or gas.",
                  "Inspect the Thermostat: Adjust the temperature settings to see if that resolves the issue.",
                  "Contact a Professional: If troubleshooting doesn't work, call Melville's Plumbing for expert repair services."
                ]
              },
              {
                question: "How can I maintain my water heater to extend its lifespan?",
                answer: [
                  "Regular maintenance can significantly extend your water heater's lifespan:",
                  "Flush the Tank: Remove sediment buildup annually to improve efficiency.",
                  "Inspect the Anode Rod: Replace it if it shows significant wear to prevent tank corrosion.",
                  "Check for Leaks: Regularly inspect for signs of water leakage.",
                  "Schedule Professional Maintenance: Our team provides thorough inspections and tune-ups to keep your unit running smoothly."
                ]
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <div className="space-y-2">
                  {faq.answer.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Service CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Service Your Water Heater?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact Melville's Plumbing today for expert water heater services in Windsor.
            </p>
            <Button 
              size="xxl"
              variant="secondary"
              className="group text-white"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Serving Windsor and Surrounding Areas
            </h2>
            <p className="text-gray-600 text-center">
              At Melville's Plumbing, we proudly serve Windsor, Tecumseh, LaSalle, Amherstburg, and beyond. Our team understands the unique plumbing needs of our community and provides personalized solutions to meet them.
            </p>
          </Card>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WaterHeaterPage;
