import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, DollarSign, MapPin } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Experienced Team",
      description: "With over a decade of experience, we have the skills and knowledge to tackle even the most challenging plumbing issues."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We take the time to listen to your needs and deliver solutions that exceed expectations."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "We believe quality plumbing services should be accessible to everyone. Our transparent pricing ensures you know what to expect without any hidden fees."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "As a Windsor-based business, we understand the unique plumbing challenges faced by our community. We're here to provide solutions tailored to local needs."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Melville's Plumbing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <reason.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};