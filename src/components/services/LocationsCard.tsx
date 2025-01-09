import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const LocationsCard = () => {
  return (
    <Card className="h-full bg-primary text-white">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Serving Windsor and Beyond
          </h3>
          <p className="text-gray-100 leading-relaxed">
            Melville's Plumbing proudly serves Windsor and surrounding communities. 
            We understand the unique plumbing challenges in our region, and we're here 
            to provide personalized solutions that last.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Local Areas Served:</h4>
          <div className="space-y-3">
            {["Windsor", "Tecumseh", "LaSalle", "Amherstburg"].map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="font-medium">And more surrounding areas</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};