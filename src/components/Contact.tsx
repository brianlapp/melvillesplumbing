import React from 'react';
import { ContactHero } from './contact/ContactHero';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export const Contact = () => {
  return (
    <section className="bg-blue-50">
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
        <ContactInfo />
      </div>
    </section>
  );
};