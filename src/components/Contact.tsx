import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Mail } from "lucide-react";

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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Available 24/7 for emergency services. Contact us for immediate assistance or to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">Available 24/7</p>
            <a href="tel:(555) 123-4567">
              <Button variant="link" className="mt-4">
                (555) 123-4567
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">Quick Response</p>
            <a href="mailto:contact@example.com">
              <Button variant="link" className="mt-4">
                contact@example.com
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600">Mon - Fri: 8am - 6pm</p>
            <p className="text-gray-600">24/7 Emergency Service</p>
          </Card>
        </div>
      </div>
    </section>
  );
};