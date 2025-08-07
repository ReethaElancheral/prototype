import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import heroImg from '../../assets/images/herobaby.png';
import overlayImg from '../../assets/images/rain.png'; 


export default function Rainbow() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-[#B0E4F4] w-full py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-8 leading-tight">
            Gentle Care for Growing Joy
          </h2>
          <p className="text-white text-lg md:text-2xl leading-relaxed font-medium">
            Premium Baby care products crafted with love, purity, and the sofest materials - because your baby deserves the best
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src={heroImg}
            alt="Hero"
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[580px] object-contain"
          />
           {/* Overlay image */}
  <img
    src={overlayImg}
    alt="Overlay"
    className="absolute top-20 right-70 w-28 sm:w-36 md:w-48 lg:w-[700px] z-0 opacity-40 pointer-events-none"
  />
        </motion.div>
      </div>
    </section>
  );
}
