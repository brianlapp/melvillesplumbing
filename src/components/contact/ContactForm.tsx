import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const NetlifyFormDetectionHTML = () => (
  <form name="Contact-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="tel" name="phone" />
    <input type="text" name="address" />
    <textarea name="message"></textarea>
  </form>
);

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
      <NetlifyFormDetectionHTML />
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contact Us</h2>
      <Card className="p-6 md:p-8 bg-white shadow-lg">
        <form 
          name="Contact-form" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="Contact-form" />
          <p hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" name="name" required placeholder="John Doe" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Your Phone Number</Label>
            <Input type="tel" id="phone" name="phone" required placeholder="(226) 123-4567" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Your Address</Label>
            <Input type="text" id="address" name="address" placeholder="123 Main St, Windsor, ON" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              placeholder="Please describe how we can help you..."
              className="min-h-[120px] w-full"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Submit Message
          </Button>
        </form>
      </Card>
    </div>
  );
};