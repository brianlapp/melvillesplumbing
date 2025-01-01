import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Star, Users } from "lucide-react";

export const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Honesty",
      description: "Transparency in our work and communication is at the heart of what we do."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We're there when you need us most, offering prompt and dependable service."
    },
    {
      icon: Star,
      title: "Skill",
      description: "With years of experience and continuous training, our team delivers superior results."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work with you every step of the way."
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-blue-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};