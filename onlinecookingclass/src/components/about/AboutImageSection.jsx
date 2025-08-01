import storyImg from "../../assets/images/aboutimg.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutImageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="flex justify-center items-center px-4 py-20 bg-[#fff6ed]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl h-[550px] rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Background Image */}
        <img
          src={storyImg}
          alt="Our Story"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-white text-lg md:text-2xl font-medium text-center max-w-3xl px-14 leading-relaxed"
          >
         <div className="flex justify-center">


<ul className="list-disc list-inside space-y-2  md:text-2xl font-semibold mb-4 px-14 mx-auto text-white text-left">
  <li><span className="text-[#D17966] font-semibold">Simplicity:</span>  We keep our recipes simple and apporachable, so even beginners can enjoy cooking.</li>
  <li><span className="text-[#D17966] font-semibold">Creativity:</span>  We encourage experimenting in the kitchen ingredients.</li>
 
</ul>

      </div>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutImageSection;
