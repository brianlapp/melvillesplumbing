import React from 'react';

export const ContactHero = () => {
  return (
    <div 
      className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-primary/75" />
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 mb-4 text-white bg-secondary/80 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            At Melville's Plumbing, we're here to help with all your plumbing needs. Whether you're dealing with an emergency, 
            planning a renovation, or just have questions about our services, our friendly and knowledgeable team is ready to assist you.
          </p>
          <p className="text-gray-200">
            We're just a call or click away! Reach out to us via phone, email, or by using our convenient contact form.
          </p>
        </div>
      </div>
    </div>
  );
};