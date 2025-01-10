import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle2, Droplet, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BackflowPreventionPage = () => {
  return (
    <ServicePageLayout
      title="Backflow Prevention Installation Services"
      description="Protect your water supply with professional backflow prevention solutions. Our certified experts ensure safe, compliant installations for homes and businesses in Windsor."
      backgroundImage="/lovable-uploads/IMG_2558.jpeg"
    >
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What is Backflow, and Why Does it Matter?</h2>
            <p className="text-gray-600 mb-8">
              Backflow occurs when water flows in the opposite direction of its intended path, potentially carrying contaminants into your clean water supply. This can happen due to pressure changes in the plumbing system caused by events like a burst pipe or a sudden drop in water pressure. Backflow poses serious health risks, making prevention essential.
            </p>
            <Button asChild size="lg" className="mb-12">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Installation of Backflow Prevention Devices</h3>
              <p className="text-gray-600">
                We install certified backflow prevention devices that act as barriers to stop contaminated water from entering your water supply.
              </p>
            </Card>
            <Card className="p-6">
              <Droplet className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">System Upgrades</h3>
              <p className="text-gray-600">
                Outdated or non-compliant systems can compromise water safety. We offer upgrades to modern, efficient solutions.
              </p>
            </Card>
            <Card className="p-6">
              <AlertTriangle className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Emergency Assistance</h3>
              <p className="text-gray-600">
                In urgent situations where contamination is suspected, our team provides immediate assistance.
              </p>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Top 5 Questions About Backflow Prevention</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are the signs of a backflow issue?",
                  a: "Common signs include discolored or foul-smelling water, reduced water pressure, or an unusual taste. If you notice these signs, contact us immediately for an inspection."
                },
                {
                  q: "Do I need a backflow prevention device for my home?",
                  a: "While backflow prevention devices are often mandatory for commercial properties, residential properties with irrigation systems, pools, or other high-risk features may also require them."
                },
                {
                  q: "How does a backflow prevention device work?",
                  a: "These devices use check valves or air gaps to prevent contaminated water from flowing back into the clean water supply. They are installed at key points in your plumbing system to act as barriers."
                },
                {
                  q: "What types of backflow prevention devices are available?",
                  a: "Common devices include pressure vacuum breakers, double-check valves, and reduced pressure zone assemblies. Our team can help determine the best option for your property."
                },
                {
                  q: "What are the costs associated with backflow prevention installation?",
                  a: "Costs vary depending on the type of device and the complexity of the installation. Contact us for a customized quote."
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-2" />
                    {item.q}
                  </h3>
                  <p className="text-gray-600 ml-8">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <section className="py-16 md:py-24 bg-[#1EAEDB] text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Contact Us for Backflow Prevention Installation
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Protect your water supply with professional backflow prevention installation services from Melville's Plumbing. Whether you need a new device installed or system upgrades, our team is here to help.
            </p>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default BackflowPreventionPage;
