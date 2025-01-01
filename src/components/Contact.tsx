import React from 'react';
import { ContactHero } from './contact/ContactHero';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { useLocation } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+15555555555'; // Replace with actual emergency number
  };

  return (
    <section className="bg-blue-50">
      {isContactPage && (
        <>
          <ContactHero />
          <div className="container mx-auto px-4 py-16">
            <ContactForm />
            <div className="text-center mb-12">
              <div className="bg-primary rounded-lg p-4 mb-6">
                <img 
                  src="/lovable-uploads/6b4d1817-8c91-4db5-9784-737b0347e368.png" 
                  alt="Company Logo" 
                  className="mx-auto h-32 w-auto md:h-44" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  We are fully licensed and insured for your peace of mind. Our team follows all local codes and regulations.
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                <p className="text-gray-600">
                  We pride ourselves on delivering exceptional service and craftsmanship on every project we undertake.
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Location & Service Area</h3>
                <p className="text-gray-600 mb-2">
                  Windsor, Ontario
                </p>
                <p className="text-gray-600">
                  We proudly serve Windsor and surrounding communities, including:
                </p>
                <ul className="text-gray-600 mt-2">
                  <li>Tecumseh</li>
                  <li>LaSalle</li>
                  <li>Amherstburg</li>
                  <li>And more!</li>
                </ul>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <PhoneCall className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  For emergency plumbing services, we're available 24/7. Don't hesitate to call us anytime you need urgent assistance.
                </p>
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg"
                  className="w-full"
                >
                  <PhoneCall className="mr-2" />
                  Call Now for Emergency Service
                </Button>
              </Card>
            </div>
            <ContactInfo />
          </div>
        </>
      )}
      {!isContactPage && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="bg-primary rounded-lg p-4 mb-6">
              <img 
                src="/lovable-uploads/6b4d1817-8c91-4db5-9784-737b0347e368.png" 
                alt="Company Logo" 
                className="mx-auto h-32 w-auto md:h-44" 
              />
            </div>
          </div>
          <ContactInfo />
        </div>
      )}
    </section>
  );
};