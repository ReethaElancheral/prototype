import storyImg from "../../assets/images/ourstoryimg.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurStory = () => {
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
            Our journey began with a passion for food and the desire to share it
            with others. Flavour theory, a passionate home cook and food
            enthusiast, started the website to create a space, where anyone no
            matter their skill level, could discver new recipes, learn helpful
            cooking tips, and explore a world of favours. <br/>Over the Years, our
            team has grown, but our core values remain the same: to inspire home
            cooks everywhere to embrace the magic of the kitchen and make every
            meal a special occasion.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory;
