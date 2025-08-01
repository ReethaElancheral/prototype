import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/homestyle.png";
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

export default function HomestyleDishes() {
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
          className="relative bg-cover bg-center rounded-3xl overflow-hidden h-[600px] shadow-xl mx-12"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          {/* Text Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center px-12 pr-[200px] text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-3 max-w-xl text-center">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
                From Butter Chicken to Singaporean Noodles: Cook <br /> India's
                favourite Dishes at Home
              </h1>
              <p className="text-sm md:text-xl text-black">
                In Just 90 days, master the art of cooking 140+ basic to
                advanced Restaurant and Homestyled dishes with step-by-step
                guidance and recipes!
              </p>

              <p className="text-2xl font-semibold text-black">
                Limited Period Offer - Get 67% OFF <br />
                <div className="flex gap-2 justify-center">
                  <span className="text-black line-through text-sm">₹6000</span>
                  <span className="text-black font-semibold text-lg">
                    ₹1999
                  </span>
                </div>
              </p>
             
              <div className="flex justify-center">
                <Link
                  to="/courses"
                  className="bg-[#bd2143] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#c1654e] transition"
                >
                  ENROLL NOW
                </Link>
              </div>

               <p className="text-xl text-black">
                Learn the secret of cooking delicious restaurant and home-style dishes and ace the art of recreating amazing cuisine at home.
              </p>
            </div>
          </motion.div>
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
                className="bg-[#D57A66] rounded-3xl shadow-xl p-3 flex items-center space-x-3"
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
