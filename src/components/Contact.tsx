import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary rounded-lg p-4 mb-6">
            <img 
              src="/lovable-uploads/6b4d1817-8c91-4db5-9784-737b0347e368.png" 
              alt="Company Logo" 
              className="mx-auto h-44 w-auto md:h-44 sm:h-32" 
            />
          </div>
          <span className="inline-block px-4 py-1 mb-4 text-primary bg-blue-50 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            At Melville's Plumbing, we're here to help with all your plumbing needs. Whether you're dealing with an emergency, 
            planning a renovation, or just have questions about our services, our friendly and knowledgeable team is ready to assist you.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're just a call or click away! Reach out to us via phone, email, or by using our convenient contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">Available 24/7 for emergencies</p>
            <a href="tel:226-820-2394">
              <Button variant="link" className="mt-4">
                226-820-2394
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">Quick Response</p>
            <a href="mailto:melvillesplumbing@gmail.com">
              <Button variant="link" className="mt-4">
                melvillesplumbing@gmail.com
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <div className="text-gray-600">
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Sat: 9am - 2pm</p>
              <p>Sun: Closed</p>
              <p className="mt-2 font-medium">24/7 Emergency Service</p>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Location & Service Area</h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Windsor, Ontario</p>
                <p className="text-gray-600 mt-2">We proudly serve Windsor and surrounding communities, including:</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Tecumseh</li>
                  <li>LaSalle</li>
                  <li>Amherstburg</li>
                  <li>And more!</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
            <p className="text-gray-600 mb-4">
              For emergency plumbing services, we're available 24/7. Don't hesitate to call us anytime you need urgent assistance.
            </p>
            <a href="tel:226-820-2394">
              <Button className="w-full">
                Call Now for Emergency Service
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};