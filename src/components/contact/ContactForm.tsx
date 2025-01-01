import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ContactFormFields } from './form-fields/ContactFormFields';
import { NetlifyFormDetection } from './form-fields/NetlifyFormDetection';

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <NetlifyFormDetection />
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contact Us</h2>
      <Card className="p-6 md:p-8 bg-white shadow-lg">
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          
          <ContactFormFields />
          
          <Button type="submit" className="w-full">
            Submit Message
          </Button>
        </form>
      </Card>
    </div>
  );
};