import React from 'react';
import { ContactHero } from './contact/ContactHero';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { useLocation } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

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