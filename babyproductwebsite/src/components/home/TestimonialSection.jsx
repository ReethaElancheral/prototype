// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import customer1 from '../../assets/images/customer1.PNG'
// import customer2 from '../../assets/images/customer2.PNG'
// import customer3 from '../../assets/images/customer3.PNG'

// const testimonials = [
//   {
//     name: 'Rahul S.',
//     location: 'Bangalore, India',
//     image: customer1,
//     quote: 'We love the stroller – lightweight, easy to fold, and super smooth on roads. Perfect for city walks. The quality feels premium, and my daughter is always comfy in it.',
//     shape: 'blob1',
//   },
//   {
//     name: 'Priya M.',
//     location: 'Chennai, India',
//     image: customer2,
//     quote: 'The EarthBubs diapers are amazing! My baby sleeps through the night without any leaks or rashes. I’ve tried many brands, but this one is truly gentle and reliable.',
//     shape: 'blob2',
//   },
//   {
//     name: 'Anika R.',
//     location: 'Mumbai, India',
//     image: customer3,
//     quote: 'I ordered the baby soap kit and I’m blown away. The lotion and wash are so gentle, and the natural fragrance is lovely. No irritation at all – just soft, healthy skin.',
//     shape: 'blob3',
//   },
// ];

// export default function TestimonialSection() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section ref={ref} className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-2"
//         >
//           Customer Testimonials
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-lg text-black mb-12"
//         >
//           Parent Favorites, Baby Approved
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {testimonials.map((t, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 60 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3 + idx * 0.2, duration: 0.7 }}
//               className="relative"
//             >
//               {/* Shadow behind SVG blob */}
//               <div className="absolute inset-0 z-0 flex justify-center items-center">
//                 <svg
//                   viewBox="0 0 400 300"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-full h-full drop-shadow-2xl blur-[0.5px] text-[#e6f7ff]"
//                   preserveAspectRatio="none"
//                 >
//                   <path
//                     d={
//                       t.shape === 'blob1'
//                         ? 'M40,20 Q10,150 60,280 Q200,310 340,280 Q390,150 360,30 Q200,-20 40,20'
//                         : t.shape === 'blob2'
//                         ? 'M20,60 Q80,0 200,20 Q350,40 380,150 Q360,250 200,280 Q80,290 20,180 Q0,100 20,60'
//                         : 'M40,30 Q10,160 80,270 Q200,310 320,270 Q390,160 360,30 Q200,-20 40,30'
//                     }
//                     fill="currentColor"
//                   />
//                 </svg>
//               </div>

//               {/* Card Content */}
//               <div className="relative px-8 pt-20 pb-10 z-10 overflow-visible">
//                 <div className="flex justify-center -mt-16 mb-5">
//                   <div className="relative">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
//                     />
//                     <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1 shadow text-xs">
//                       ⭐
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-center text-sm text-black font-semibold">
//                   {t.name} – {t.location}
//                 </p>
//                 <p className="mt-4 text-center text-md text-black px-2">
//                   “{t.quote}”
//                 </p>
//               </div>
              
//             </motion.div>

            
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from '../../assets/images/testimonial1.PNg'
import testimonial2 from '../../assets/images/testimonial2.PNg'
import testimonial3 from '../../assets/images/testimonial3.PNg'


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



