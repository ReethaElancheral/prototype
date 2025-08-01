import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/heroimg.png";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full font-poppins bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-4 h-[450px]">


        {/* Left Column - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[45%] flex justify-center h-[350px]"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[55%] relative flex justify-center items-center h-[350px]"
        >
          {/* Background side colors */}
          <div className="absolute left-0 top-0 h-full w-[10%] bg-[#A7C957] z-0 rounded-l-xl" />
          <div className="absolute right-0 top-0 h-full w-[10%] bg-[#A7C957] z-0 rounded-r-xl" />

          {/* White box with content */}
          <div className="bg-white z-10 p-6 md:p-4 rounded-xl text-center max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEF'S
            </h2>
            <p className="text-black mb-6 text-sm md:text-base leading-relaxed ">
              CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT,ON HOW TO COOK SCRUMPTIOUS,INSTAGRAM READY,LIP SMACKING DISHES THAT ARE CLEAN,HEALTHY AND ENERGIZING.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            >
              <Link
                to="/featured-course"
                className="inline-block bg-[#b86654] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#c1654e] transition"
              >
                View Courses
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
