import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const LocationsCard = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h4 className="text-primary font-semibold text-lg mb-4">Local Areas Served:</h4>
      <div className="space-y-3">
        {["Windsor", "Tecumseh", "LaSalle", "Amherstburg"].map((area) => (
          <div key={area} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium">{area}</span>
          </div>
        ))}
        <div className="flex items-center space-x-2">
          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="text-gray-700 font-medium">And more surrounding areas</span>
        </div>
      </div>
    </div>
  );
};