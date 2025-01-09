import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const MaintenanceTips = () => {
  const tips = [
    "Regular Inspections: Schedule periodic inspections to catch small issues before they escalate.",
    "Proper Waste Disposal: Avoid pouring grease, oil, or harsh chemicals down your drains.",
    "Monitor Water Pressure: Excessive pressure can strain your plumbing system. Use a pressure regulator if necessary.",
    "Winterize Your Pipes: Protect exposed pipes during the colder months to prevent freezing and bursting.",
    "Address Leaks Promptly: Even minor leaks can lead to significant water waste and damage over time."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tips for Maintaining Your Plumbing System
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Expert Maintenance Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};