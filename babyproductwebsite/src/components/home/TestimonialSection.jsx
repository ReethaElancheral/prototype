

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from '../../assets/images/testimonial1.PNG'
import testimonial2 from '../../assets/images/testimonial2.PNG'
import testimonial3 from '../../assets/images/testimonial3.PNG'


const testimonialPages = [
  [
    { src: testimonial1, alt: "Rahul Testimonial" },
    { src: testimonial2, alt: "Priya Testimonial" },
    { src: testimonial3, alt: "Anika Testimonial" },
  ],
  [
    { src: testimonial2, alt: "Sneha Testimonial" },
    { src: testimonial1, alt: "Vikram Testimonial" },
    { src: testimonial3, alt: "Extra Testimonial" }, // add more if needed
  ],
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialPages.length);
    }, 20000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-black mb-2">
          Customer Testimonials
        </h2>
        <p className="text-lg text-black">
          Parent Favorites, Baby Approved
        </p>
      </div>

      {/* Testimonials Row */}
      <div className="relative w-full max-w-7xl flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
          >
            {testimonialPages[index].map((testimonial, i) => (
              <div
                key={i}
                className="w-full h-auto rounded-xl overflow-hidden"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex gap-2">
        {testimonialPages.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-sky-400 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}



