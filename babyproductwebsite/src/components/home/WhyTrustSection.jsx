import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/trust1.png';
import img2 from '../../assets/images/trust2.png';
import img3 from '../../assets/images/trust3.png';
import img4 from '../../assets/images/trust4.png';
import img5 from '../../assets/images/trust5.png';

const cards = [
  {
    img: img1,
    title: 'Dermatologist Apporved',
    desc: 'Every product is tested and safe for even the most sensitive baby skin.',
  },
  {
    img: img2,
    title: 'Natural & Non-Toxic Ingredients ',
    desc: 'We use only gentle, plant based formulas free from harsh chemicals.',
  },
  {
    img: img3,
    title: 'Loved by Thousands of Parents ',
    desc: 'Real reviews, real results trusted by family across countries.',
  },
  {
    img: img4,
    title: 'Eco- Friendly Promise',
    desc: 'From Bio-degradable packaging to cruelty - free manufacturing, we care for the planet as much as your baby.',
  },
  {
    img: img5,
    title: 'Fast & Reliable Shipping',
    desc: 'We deliver your baby essentials swiftly and safely because every moment counts.',
  },
];

export default function WhyTrustSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="bg-white w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Why Parents Trust Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-black mt-2"
        >
          Designed with Love, Backed by Science
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="bg-white border border-[#B0E4F4] rounded-xl p-6 flex flex-col items-center text-center shadow-md min-h-[300px]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-26 h-26 object-contain mb-4"
            />

            {/* ✅ Separated Text Division */}
            <div className="flex flex-col items-center flex-grow bg-[#B0E4F4] border border-[#80adbb] rounded-xl  p-2">
              <h3 className="text-lg font-semibold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-black text-md font-medium leading-relaxed">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
