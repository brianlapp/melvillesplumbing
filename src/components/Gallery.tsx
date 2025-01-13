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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-primary bg-blue-50 rounded-full text-sm font-medium">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Browse through our recent plumbing projects and see the quality of our workmanship
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  alt={`Melville's Plumbing Project ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover"
                  loading="lazy"
                  width="400"
                  height="300"
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
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Close image preview"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-[90vh] object-contain"
            width="800"
            height="600"
          />
        </div>
      )}
    </section>
  );
};