import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/abouthero.png";

const AboutHeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full font-poppins bg-white">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-24 gap-2 h-[500px]">


 {/* left Column - Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[50%] relative flex justify-center items-center h-[400px]"
        >
          {/* Background side colors */}
        {/* Top (fades downward) */}
<div className="absolute top-0 left-0 w-full h-[10%] z-0 bg-gradient-to-b from-[#A7C957] to-transparent" />

{/* Bottom (fades upward) */}
<div className="absolute bottom-0 left-0 w-full h-[10%] z-0 bg-gradient-to-t from-[#A7C957] to-transparent" />


          {/* White box with content */}
          <div className=" z-10 p-6 md:p-4 rounded-xl text-center max-w-md">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-800">
              MORE POWER TO YOUR COOKING THROUGH LEARNING
            </h2>
            <p className="text-black mb-6 text-sm md:text-base leading-relaxed ">
              Discover a Better Way of Cooking Amazing Dishes With Recipes Specially Curated by the Most Celebrated Face In The Indian Cuisine.
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


        {/* right Column - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50%] flex justify-center h-[400px]"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </motion.div>

       
      </div>
    </section>
  );
};

export default AboutHeroSection;
