
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

export default function Enrollment() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onBlur' });
   const [showModal, setShowModal] = useState(false); // ✅ Modal toggle
  const subtotal = 36000;

  const onSubmit = data => {
    if (data.haveAccount) return navigate('/login');
    // Save enrollment
    const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    enrollments.push({ ...data, totalPayable: subtotal });
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
    alert('Enrollment saved');
    setShowModal(true); // ✅ Show modal instead of alert
  };

  const discount = watch('coupon') === 'BAKER10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-yellow-50 px-4 flex justify-center items-center py-10">
      <div className=" relative w-full max-w-lg  bg-[#ffefd0]  rounded-2xl shadow-xl px-8 pt-16 pb-8 flex flex-col ">
        
         <h2 className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#A7C957] text-black text-2xl font-bold px-6 py-2 rounded-full shadow-md z-10">ENROLL</h2>
        <div className="text-center font-semibold text-gray-700 mb-6">Bakery Business Accelerator Program</div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <label className="block font-semibold text-gray-700 mb-1">NAME</label>
          <input {...register('name', {
              required: 'Name is required',
              pattern: { value: /^[A-Za-z ]+$/, message: 'Letters only' }
            })}
            className={`w-full border rounded-full px-4 py-2 mb-2 focus:ring-2 ${ errors.name ? 'border-red-500 focus:ring-red-400' : 'border-red-200 focus:ring-green-300' }`}
          />
          {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name.message}</p>}

          {/* Email */}
          <label className="block font-semibold text-gray-700 mb-1">E MAIL</label>
          <input type="email" {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }
          })} className="w-full border-red-200 rounded-full px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>}

          {/* Mobile */}
          <label className="block font-semibold text-gray-700 mb-1">MOBILE NUMBER</label>
          <input type="tel" {...register('mobile', {
            required: 'Mobile is required',
            pattern: { value: /^\d{10,15}$/, message: '10–15 digits only' }
          })} className="w-full border-red-200 rounded-full px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
          {errors.mobile && <p className="text-red-600 text-sm mb-2">{errors.mobile.message}</p>}

          <div className="mb-4 text-right">
            <label className="inline-flex items-center">
              <input type="checkbox" {...register('haveAccount')} className="mr-2" />
              Already have an account?
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" {...register('gstin')} className="mr-2" />
              USE GSTIN For Claiming Input Tax (India)
            </label>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between"><span>SUB TOTAL:</span><span>INR {subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>DISCOUNT:</span><span>INR {discount.toFixed(2)}</span></div>
            <div className="flex justify-between font-semibold"><span>TOTAL PAYABLE:</span><span>INR {total.toFixed(2)}</span></div>
          </div>

          <div className="mb-4 flex space-x-2">
            <input type="text" {...register('coupon')} placeholder="Coupon Code"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2" />
            <button type="button" onClick={() => {}} className="bg-white hover:bg-[#A7C957] text-black px-4 py-2 rounded-full">
              APPLY COUPON
            </button>
          </div>

          <div className="mb-6 space-y-2">
            <label className="font-semibold block">UPI USE PAYMENT</label>
            <input type="radio" {...register('payment')} value="UPI" defaultChecked /> UPI
            <label className="font-semibold block mt-2">CREDIT/DEBIT CARD USE PAY</label>
            <input type="radio" {...register('payment')} value="CARD" /> CARD
          </div>

          <button type="submit" className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-full">
            SUBMIT & PAY NOW
          </button>
        </form>

        {/* ✅ Success Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-md text-center shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4 uppercase">ENROLL OUR COURSE SUCCESSFULLY.</h2>
              <p className="text-gray-700 uppercase mb-6">
                FLOVER THEORY TEAM WILL BE SEND THE COURSE DETAILS TO YOUR MAIL AND WATSAPP NUMBER.
              </p>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
                onClick={() => {
                  setShowModal(false);
                  navigate('/'); // Go to homepage after close
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
