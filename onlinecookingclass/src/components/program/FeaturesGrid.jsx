import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import icon1 from "../../assets/images/greenicon1.PNG";
import icon2 from "../../assets/images/greenicon2.PNG";
import icon3 from "../../assets/images/greenicon3.PNG";
import icon4 from "../../assets/images/greenicon4.PNG";
import icon5 from "../../assets/images/greenicon5.PNG";
import icon6 from "../../assets/images/greenicon6.PNG";

const iconsData = [
  { icon: icon1, text: "1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE." },
  { icon: icon2, text: "MORE THAN 140 DOWNLOADABLE SIGNATURE RECIPES FROM THE MASTERCHEF" },
  { icon: icon3, text: "LEARN HOW TO COOK DISHES FROM BASIC TO ADVANCED RECIPES" },
  { icon: icon4, text: "WATCH VIDEO UNLIMITED TIMES AND DOWNLOAD RECIPES PDF'S" },
  { icon: icon5, text: "LEARN FROM ANYWHERE WITH ANY DEVICE-MOBILE , OR LAPTOP" },
  { icon: icon6, text: "COURSE COMPLETION CERTIFICATE" },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      style={{ backgroundColor: "#fff6ed" }}
      className="w-full flex justify-center py-12"
    >
      <motion.div
        ref={ref}
        className="bg-[#A7C957] max-w-[1200px] w-full px-6 py-12 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
          {iconsData.map(({ icon, text }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-left max-w-[300px] mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src={icon}
                alt={`Feature icon ${index + 1}`}
                className="w-20 h-20 mb-4 object-contain"
              />
              <p className="text-white font-semibold text-xl leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
