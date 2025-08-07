
import confettiImage from '../../assets/images/orderconfirm.PNG'
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const confettiVariants = {
  initial: {
    y: -50,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: [0, 10, -10, 20, -20, 0],
    opacity: [0, 1, 1, 0.5, 0],
    scale: [0.8, 1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || 'N/A';

  React.useEffect(() => {
    if (!location.state?.orderId) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white relative overflow-hidden">
      {/* Breadcrumb */}
      <div className="w-full max-w-5xl text-sm text-black font-medium text-left mb-6 mt-4">
        Home &gt; Add to Cart &gt; Payments &gt; <span className="text-black font-bold">Order Complete</span>
      </div>

      {/* Animated Floating Confetti */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: ['#00B4D8', '#FF9F1C', '#F72585', '#FFD166'][i % 4],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            zIndex: 0,
          }}
          variants={confettiVariants}
          initial="initial"
          animate="animate"
        />
      ))}

      {/* Static Confetti Image (centered badge) */}
      <div className="relative z-10">
        <img
          src={confettiImage}
          alt="Order Success"
          className="w-[300px] h-[300px] object-contain mx-auto"
        />
      </div>

      {/* Order ID */}
      <p className="text-sm mt-4 text-black font-medium z-10">Order ID: {orderId}</p>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#2d2e82] mt-2 z-10">
        Your Order Is Completed!
      </h1>

      {/* Subtext */}
      <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-500 z-10">
        Thank you for your order! Your order is being processed and will be completed within 3–6 hours.
        You will receive an email confirmation when your order is completed.
      </p>
    </div>
  );
}
