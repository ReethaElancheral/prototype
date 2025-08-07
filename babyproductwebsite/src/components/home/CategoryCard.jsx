import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrowicon.PNG';


const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function CategoryCard({ imageUrl, title, to }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative bg-white rounded-xl border-2 border-teal-200 hover:shadow-lg overflow-visible px-4 pt-4"
    >
      {/* Image */}
      <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden h-[320px]">
        <img src={imageUrl} alt={title} className="w-full h-full object-fill" />
      </div>

<div className="relative bg-white pb-0 pt-4 mt-20">
 <div
  className="absolute bottom-0 left-0 h-[80px] bg-[#B0E4F4] border border-teal-300"
  style={{
    width: 'calc(100% + 32px)',  // 100% + 2 * 16px padding
    left: '-16px',                // negative offset to align flush with outer card
   clipPath:
      'polygon(0 0, calc(100% - 75px) 0, calc(100% - 45px) 45px, 100% 55px, 100% 100%, 0 100%)',
  }}
>
  <div className="flex items-center h-full px-6">
    <h3 className="text-base font-semibold text-black leading-none">{title}</h3>
  </div>
</div>


  {/* Arrow Button */}
  <button
    onClick={() => navigate(to)}
    className="absolute left-[220px] bottom-[40px] w-10 h-10 border border-teal-300 bg-[#B0E4F4] rounded-full flex items-center justify-center shadow-md z-10"
    aria-label={`Explore ${title}`}
  >
    <img src={arrow} alt="arrow" className="w-4 h-4" />
  </button>
</div>




    </motion.div>
  );
}
