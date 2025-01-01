import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded by Reis Melville, Melville's Plumbing began with a mission to provide quality 
              plumbing services that customers can trust. With over a decade of experience in the 
              industry, Reis has built a reputation for integrity, professionalism, and a commitment 
              to excellence.
            </p>
            <div className="relative">
              <img
                src="/lovable-uploads/IMG_8857.jpg"
                alt="Melville's Plumbing Work"
                className="rounded-lg w-full object-cover"
              />
              <svg
                className="absolute -bottom-4 -right-4 -z-10 text-blue-50"
                width="196"
                height="196"
                viewBox="0 0 196 196"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M196 0V196H0C0 87.775 87.775 0 196 0Z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mt-8 md:mt-0"
          >
            <img
              src="/lovable-uploads/IMG_8960.jpeg"
              alt="Melville's Plumbing Team"
              className="rounded-lg w-full object-cover"
            />
            <svg
              className="absolute -top-4 -left-4 -z-10 text-blue-50"
              width="196"
              height="196"
              viewBox="0 0 196 196"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V196H196C196 87.775 108.225 0 0 0Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};