import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  slug?: string;
}

export const ServiceCard = ({ icon: Icon, title, description, index, slug }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <Icon className="w-12 h-12 text-primary mb-4" />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button variant="outline" className="w-full" asChild>
            <Link to={slug ? `/services/${slug}` : "/contact"}>
              {slug ? "Learn More" : "Contact Us"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};