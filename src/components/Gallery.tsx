import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projectImages = [
  "/lovable-uploads/64ECE3C6-26B3-4AD4-9D74-20456E6A5D79.jpeg",
  "/lovable-uploads/IMG_1709.jpg",
  "/lovable-uploads/IMG_2023.jpeg",
  "/lovable-uploads/IMG_2031.jpeg",
  "/lovable-uploads/IMG_2342.jpeg",
  "/lovable-uploads/IMG_2558.jpeg",
  "/lovable-uploads/IMG_2559.jpeg",
  "/lovable-uploads/IMG_3138.jpeg",
  "/lovable-uploads/IMG_3139.jpeg",
  "/lovable-uploads/IMG_3308.jpeg",
  "/lovable-uploads/IMG_3696.jpeg",
  "/lovable-uploads/IMG_5273.jpg"
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-primary bg-blue-50 rounded-full text-sm font-medium">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our recent plumbing projects and see the quality of our workmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Plumbing Project ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};
