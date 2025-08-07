// src/components/BestSellerCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function BestSellerCard({ product }) {
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
      {/* NEW badge */}
      {product.isNew && (
        <div className="absolute top-0 left-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
          NEW
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden h-[320px] px-8 py-10">
        <img
  src={product.image || '/images/default.jpg'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slanted bottom section */}
      <div className="relative bg-white pb-0 pt-4 mt-20">
        <div
          className="absolute bottom-0 left-0 h-[100px] bg-[#B0E4F4] border border-teal-300"
          style={{
            width: 'calc(100% + 32px)',
            left: '-16px',
            clipPath:
              'polygon(0 0, calc(100% - 90px) 0, calc(100% - 55px) 55px, 100% 55px, 100% 100%, 0 100%)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-6 space-y-2">
            {/* Title */}
            <h3 className="text-base font-bold text-black leading-none capitalize">{product.name}</h3>

            {/* Stars */}
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <p className="text-gray-500 font-bold line-through">MRP ₹{product.MRP}</p>
              <p className="font-bold text-gray-900">Price ₹{product.price}</p>
            </div>
          </div>
        </div>

        {/* Buy Button */}
       
        <button
          onClick={() => navigate(`/products/${product.category}`)}
          className="absolute left-[315px] bottom-[60px] border border-teal-300 bg-cyan-500 text-white font-semibold py-1 px-3 rounded-full shadow-md z-10 hover:bg-cyan-600"
        >
          Buy
        </button>
      
      </div>
    </motion.div>
  );
}
