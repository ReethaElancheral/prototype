import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/curriculam.png";
import sampleImage from "../../assets/images/noodles.png";

export default function CourseCurriculam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#fff6ed] pt-20 pb-32 px-4 flex justify-center items-center relative z-0"
    >
      <div className="max-w-7xl w-full relative">
        <div className="text-center mb-10 ">
          <h2 className="text-3xl font-semibold uppercase text-black mb-5">
            Course Curriculam
          </h2>
        </div>
        {/* Main Bakery Banner */}
        <div
          className="relative bg-cover bg-center rounded-3xl overflow-hidden h-[600px] shadow-xl mx-12"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-end px-4 md:px-12 lg:px-20 text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-3 max-w-xl text-left w-full">
              <ul className="list-disc list-inside space-y-2 text-sm md:text-lg lg:text-2xl font-semibold mb-4 text-gray-800">
                <li className="text-black">
                  Introduction: Restaurant style Dishes
                </li>
                <li className="text-black">Master Class with master chef</li>
                <li className="text-black">
                  Restaurant style Dishes: Accompaniments
                </li>
                <li className="text-black">Breads</li>
                <li className="text-black">Desserts</li>
                <li className="text-black">Main Course: Non-veg</li>
                <li className="text-black">Main Course: Veg</li>
                <li className="text-black">Rice</li>
                <li className="text-black">Soup - Veg</li>
                <li className="text-black">Starters - Veg</li>
                <li className="text-black">
                  Bonus Course: All about Us Assessments
                </li>
                <li className="text-black">Thank You</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className=" w-full max-w-6xl h-[550px] rounded-2xl overflow-hidden my-12">
          <h2 className="text-3xl font-semibold uppercase text-black mb-5 text-center">
            Our Class Sample Video
          </h2>
          <img
            src={sampleImage}
            alt="Home Visual"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        <div className="space-y-3 max-w-3xl text-left w-full mx-10">
          <h2 className="text-3xl font-semibold uppercase text-black mb-5 text-center">
            VEG HAKKA NOODLES(INDIAN-CHINESE)
          </h2>
          <ul className="list-disc list-inside text-sm md:text-xl lg:text-xl font-semibold mb-4 text-gray-800">
            <h2 className="text-xl font-semibold uppercase text-black mb-5 text-left">
              Ingredients
            </h2>
            <li className="text-black">Master Class with master chef</li>
            <li className="text-black">200g Hakka Noodles</li>
            <li className="text-black">2 Tbsp oil</li>
            <li className="text-black">1 Tbsp Soy Sauce</li>
            <li className="text-black">1 Tbsp Vinegar</li>
            <li className="text-black">1/2 Tbsp Chilli Sauce</li>
            <li className="text-black">1 Tbsp Garlic(finely chopped)</li>
            <li className="text-black">1 Tbsp Onion(finely chopped)</li>
            <li className="text-black">
              1 cup julienned veggies(carrot, bell pepper,Cabbage, Beans)
            </li>
            <li className="text-black">Salt& Pepper</li>
            <br />
            <h2 className="text-xl font-semibold uppercase text-black mb-5 text-left">
              Instructions
            </h2>

            <li className="text-black">
              1. boil Noodles, Rinse With cold water, Toss in a bit of oil.
            </li>
            <li className="text-black">
              2. Heat Oil in a Wok, Saute Garlic and Onions.
            </li>
            <li className="text-black">
              3.Add all veggies and Stir-fry on high heat for 2-3 minutes..
            </li>
            <li className="text-black">
              4.Add Noodles, soy sauce, vinegar, chilli sauce,, salt & pepper.
            </li>
            <li className="text-black">
              5. Toss on high flame until well combined. Serve Hot..
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
