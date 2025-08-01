
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import chefImg from "../../assets/images/cloudfloatimg.png";
import bannerImg from "../../assets/images/bakery.png";
import icon1 from "../../assets/images/icon1.PNG";
import icon2 from "../../assets/images/icon2.PNG";
import icon3 from "../../assets/images/icon3.PNG";

const featureCards = [
  {
    icon: icon1,
    text: (
      <>
        20M <br /> Followers
      </>
    ),
  },
  {
    icon: icon2,
    text: (
      <>
        Author <br /> 50+ Books
      </>
    ),
  },
  {
    icon: icon3,
    text: (
      <>
        30 Years+ <br /> Culinary expertise
      </>
    ),
  },
];

export default function CloudKitchen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

const chefFloatVariants = {
  float: {
    y: [-20, 20],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};


  const chefAppearVariants = {
    hidden: { opacity: 0, x: 50 },
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
     
       
        {/* Main Bakery Banner */}
        <div
          className="relative bg-cover bg-center rounded-3xl overflow-hidden h-[600px] shadow-xl mx-10"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          {/* Text Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center pl-12 pr-[200px] text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-3 max-w-xl">
             
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                Launch & Grow Your Bakery Business in the next 60 Days
              </h1>
              <p className="text-sm md:text-base">
                Even if You Don’t Have Any Prior Experience in Baking!
              </p>
              <ul className="text-sm list-disc list-inside">
                <li>Batch II Start Date – 31st July 2025</li>
                <li>10+ - hours of Pre-Recorded Video Content</li>
                <li>100+ Baking Recipes</li>
                <li>Exclusive Master Classes</li>
              </ul>
              <p className="text-lg font-semibold">
                Program Fees: ₹1 Lakh | INR{" "}
                <span className="text-2xl font-bold text-white">36,000/-</span>
              </p>
               <p className="text-base bg-white w-[530px] text-[#bd2143]">
                We're looking for action Takers.Program Open for 50Participants.
              </p>
               <div className="flex justify-left">
          <Link
            to="/enroll"
            className="bg-[#bd2143] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#c1654e] transition"
          >
            ENROLL NOW
          </Link>
        </div>
            </div>
          </motion.div>

          {/* Wrapper div for centering - absolute + translateY */}
          <div className="absolute top-1/2 right-14 transform -translate-y-1/2 z-10">
            {/* Motion img animating floating inside */}
            <motion.img
              src={chefImg}
              alt="Chef"
              className="w-[400px] h-[400px] object-cover rounded-full border-4 border-white shadow-2xl cursor-pointer"
              variants={chefFloatVariants}
              initial={false}
              animate={isInView ? "float" : "hidden"}
            />
          </div>
        </div>

        {/* Sub Cards */}
        <motion.div
          className="absolute w-full left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0 px-6 md:px-16 z-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#fff6ed] rounded-3xl shadow-xl p-3 flex items-center space-x-3"
                style={{ maxWidth: "280px" }}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={card.icon}
                  alt={`icon-${index}`}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <p className="text-sm font-medium text-black leading-tight">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
