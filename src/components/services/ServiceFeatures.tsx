import { Card } from "@/components/ui/card";
import { Clock, Wrench, Home, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
      <Card className="text-left p-6">
        <div className="flex items-start space-x-3">
          <Wrench className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-2">Experienced Team</h3>
            <p className="text-gray-600">With over a decade of hands-on experience, we bring expertise to every job.</p>
          </div>
        </div>
      </Card>
      <Card className="text-left p-6">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-2">Honest & Reliable</h3>
            <p className="text-gray-600">Our reputation is built on trust and transparency.</p>
          </div>
        </div>
      </Card>
      <Card className="text-left p-6">
        <div className="flex items-start space-x-3">
          <Home className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-2">Locally Owned</h3>
            <p className="text-gray-600">We understand Windsor's unique plumbing needs and challenges.</p>
          </div>
        </div>
      </Card>
      <Card className="text-left p-6">
        <div className="flex items-start space-x-3">
          <Clock className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-2">Guaranteed Satisfaction</h3>
            <p className="text-gray-600">We stand behind our work to ensure your peace of mind.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};