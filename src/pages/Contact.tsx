import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Footer } from "@/components/Footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Melville's Plumbing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to help with all your plumbing needs. Whether it's an emergency, 
                a planned renovation, or you have questions, our team is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">Available 24/7 for emergencies</p>
                <a href="tel:226-820-2394" className="text-primary hover:underline block mt-2">
                  226-820-2394
                </a>
              </Card>

              <Card className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">Quick Response</p>
                <a href="mailto:melvillesplumbing@gmail.com" className="text-primary hover:underline block mt-2">
                  melvillesplumbing@gmail.com
                </a>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8:00 AM – 6:00 PM</p>
                <p className="text-gray-600">Sat: 9:00 AM – 2:00 PM</p>
                <p className="text-gray-600">Sun: Closed</p>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Input placeholder="Address" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="regular">Regular Service</SelectItem>
                      <SelectItem value="quote">Request Quote</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Message" className="min-h-[120px]" />
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Service Area</h2>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Areas We Serve</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Windsor</li>
                        <li>Tecumseh</li>
                        <li>LaSalle</li>
                        <li>Amherstburg</li>
                        <li>And surrounding areas</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </motion.div>
  );
};

export default ContactPage;