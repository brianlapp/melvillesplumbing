import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Wrench, Home, Shield, Phone, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServicesList } from "./services/ServicesList";

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Plumbing Services in Windsor
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
            we provide a full range of professional services to meet your residential and commercial 
            plumbing needs. Whether you're facing an emergency or planning a renovation, our experienced 
            team delivers reliable, high-quality solutions tailored to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <Card className="text-left p-6">
              <div className="flex items-start space-x-3">
                <Wrench className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Experienced Team</h3>
                  <p className="text-gray-600">With over a decade of hands-on experience, we bring expertise to every job.</p>
                </div>
              </div>
            </Card>
            <Card className="text-left p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Honest & Reliable</h3>
                  <p className="text-gray-600">Our reputation is built on trust and transparency.</p>
                </div>
              </div>
            </Card>
            <Card className="text-left p-6">
              <div className="flex items-start space-x-3">
                <Home className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Locally Owned</h3>
                  <p className="text-gray-600">We understand Windsor's unique plumbing needs and challenges.</p>
                </div>
              </div>
            </Card>
            <Card className="text-left p-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Guaranteed Satisfaction</h3>
                  <p className="text-gray-600">We stand behind our work to ensure your peace of mind.</p>
                </div>
              </div>
            </Card>
          </div>
          <Button size="lg" asChild className="mb-12">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <ServicesList />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Serving Windsor and Beyond
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Melville's Plumbing proudly serves Windsor and surrounding communities. 
                    We understand the unique plumbing challenges in our region, and we're here 
                    to provide personalized solutions that last.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-primary font-semibold text-lg mb-4">Local Areas Served:</h4>
                  <div className="space-y-3">
                    {["Windsor", "Tecumseh", "LaSalle", "Amherstburg"].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{area}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">And more surrounding areas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Contact Us for Expert Service
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Ready to schedule a service or get a free quote? Contact Melville's Plumbing today!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" asChild className="w-full">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                  
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <p className="text-primary font-semibold">
                        Call/Text: <a href="tel:226-820-4264" className="hover:underline">226-820-4264</a>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <p className="text-primary font-semibold">
                        Email: <a href="mailto:melvillesplumbing@gmail.com" className="hover:underline">melvillesplumbing@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};