import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ContactFormFields = () => {
  return (
    <>
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
    </>
  );
};