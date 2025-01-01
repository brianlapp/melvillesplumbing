import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const EmergencyCard = () => {
  return (
    <div className="container mx-auto px-4 max-w-4xl mb-12">
      <Card className="p-6 bg-white">
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
  );
};