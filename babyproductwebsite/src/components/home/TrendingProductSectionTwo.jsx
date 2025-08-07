import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import feedingbottle from "../../assets/images/homefeeding.png";
import arrowIcon from "../../assets/images/arrowicon.PNG";

export default function TrendingProductSectionTwo() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="w-full bg-white py-20 px-6 md:px-12">
      {/* Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10"
      >
        {/* left: Content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left self-start">
          <h3 className="text-2xl md:text-5xl  text-black mb-4">
            Feeding Bottle
          </h3>
          <p className="text-black mb-6 text-base md:text-xl leading-10">
            The baby feeding bottle is made from 100% BPA-free, soft materials.
            its soft silicon nipple feels natural and gentle on the baby's
            mouth. The anti-colic design helps reduce gas and fussiness during
            feeding. it's light weight, easy to hold and perfect for everyday
            use.
          </p>

          <Link to="products/bottle">
            <button className="flex items-center gap-2 text-xl bg-[#97daee] text-black px-6 py-3 rounded-full transition-all duration-300 shadow-md">
              Buy Now
              <img src={arrowIcon} alt="arrow" className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* right: Image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={feedingbottle}
            alt="Baby Stroller"
            className="w-[280px] sm:w-[350px] md:w-[520px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
