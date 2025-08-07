import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import strollerImg from "../../assets/images/strollerbaby.png";
import arrowIcon from "../../assets/images/arrowicon.PNG";

export default function TrendingProductSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="w-full bg-white py-20 px-6 md:px-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-black"
        >
          Trending Products
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-black mt-6 mb-16"
        >
          Parent Favourites, Baby Approved.
        </motion.p>
      </div>

      {/* Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10"
      >
        {/* Left: Image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={strollerImg}
            alt="Baby Stroller"
            className="w-[280px] sm:w-[350px] md:w-[520px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left self-start">
          <h3 className="text-2xl md:text-5xl  text-black mb-4">
            Baby Stroller
          </h3>
          <p className="text-black mb-6 text-base md:text-xl leading-[2] pt-6">
            Explore the world in comfort with our smooth and stylish baby
            stroller. Designed for safety, ease and felxibility perfect for
            every little adventure. Lightweight, foldable and Parent-friendly
            for life on the go.
          </p>

          <Link to="products/stroller">
            <button className="flex items-center gap-2 text-xl bg-[#97daee] text-black px-6 py-3 rounded-full transition-all duration-300 shadow-md">
              Buy Now
              <img src={arrowIcon} alt="arrow" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
