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
      <Card className="h-full hover:shadow-lg transition-shadow bg-primary text-white">
        <CardHeader className="pb-2">
          <Icon className="w-12 h-12 text-secondary mb-4" />
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-100">{description}</p>
          <Button 
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary/90 text-white" 
            asChild
          >
            <Link to={slug ? `/services/${slug}` : "/contact"}>
              {slug ? "Learn More" : "Contact Us"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};