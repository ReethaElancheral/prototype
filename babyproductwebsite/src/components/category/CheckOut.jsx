import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import gpay from '../../assets/images/gpay.PNG';
import applepay from '../../assets/images/applepay.PNG';
import amazon from '../../assets/images/amazonpay.PNG';
import paypal from '../../assets/images/paypal.PNG';
import mastercard from '../../assets/images/mastercard.PNG';


export default function CheckOut() {
  const { cartItems, subtotal, totalItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phone: '',
    email: '',
    saveInfo: false,
  });
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

   useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/products/pampers');  // or change to your preferred route
    }
  }, [cartItems, navigate]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('checkoutForm');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Shipping and discount logic
  const discount = subtotal > 200 ? 20 : 0;
 // example, adjust as needed
  const shipping = subtotal > 300 ? 0 : 70;
  const total = subtotal - discount + shipping;

  // Validation function
  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.streetAddress.trim()) errs.streetAddress = 'Street address is required';
    if (!formData.townCity.trim()) errs.townCity = 'Town/City is required';

    // Phone validation (simple)
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\+?\d{7,15}$/.test(formData.phone.trim()))
      errs.phone = 'Enter a valid phone number';

    // Email validation
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    )
      errs.email = 'Enter a valid email address';

    if (!paymentMethod) errs.paymentMethod = 'Select a payment method';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Place order handler
  const handlePlaceOrder = () => {
    if (!validate()) return;

    if (formData.saveInfo) {
      localStorage.setItem('checkoutForm', JSON.stringify(formData));
    } else {
      localStorage.removeItem('checkoutForm');
    }

    // Here you can also save order data to backend if needed

    // Generate a simple order ID (could be from backend)
    const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);

    // Navigate to order confirmation page with orderId in state
    navigate('/order-confirmation', { state: { orderId } });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      {/* Left column - Form */}
      <div className="col-span-12 md:col-span-7 border rounded p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Details</h2>

        <label className="block">
          <span className="font-semibold">First Name *</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
        </label>

        <label className="block">
          <span>Company Name</span>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 border-gray-300"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Street Address *</span>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.streetAddress && <p className="text-red-600 text-sm">{errors.streetAddress}</p>}
        </label>

        <label className="block">
          <span>Apartment, Floor, etc. (Optional)</span>
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 border-gray-300"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Town / City *</span>
          <input
            type="text"
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${errors.townCity ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.townCity && <p className="text-red-600 text-sm">{errors.townCity}</p>}
        </label>

        <label className="block">
          <span className="font-semibold">Phone Number *</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890"
            className={`w-full border rounded px-3 py-2 mt-1 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
        </label>

        <label className="block">
          <span className="font-semibold">Email Address *</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </label>

        <label className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <span>Save this information for faster check-out next time</span>
        </label>
      </div>

      {/* Right column - Cart summary + payment */}
      <div className="col-span-12 md:col-span-5 border rounded p-6 flex flex-col space-y-6">
        <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>- ₹{discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>₹{shipping}</span>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <div className="flex flex-wrap gap-3 mt-4">
            {/* Replace src with your icons */}
            <img src={gpay} alt="GPay" className="h-12 cursor-pointer" onClick={() => setPaymentMethod('gpay')} style={{ opacity: paymentMethod === 'gpay' ? 1 : 0.5 }} />
            <img src={applepay} alt="Apple Pay" className="h-12 cursor-pointer" onClick={() => setPaymentMethod('applepay')} style={{ opacity: paymentMethod === 'applepay' ? 1 : 0.5 }} />
            <img src={amazon} alt="Amazon Pay" className="h-12 cursor-pointer" onClick={() => setPaymentMethod('amazon')} style={{ opacity: paymentMethod === 'amazon' ? 1 : 0.5 }} />
            <img src={paypal} alt="PayPal" className="h-12 cursor-pointer" onClick={() => setPaymentMethod('paypal')} style={{ opacity: paymentMethod === 'paypal' ? 1 : 0.5 }} />
            <img src={mastercard} alt="MasterCard" className="h-12 cursor-pointer" onClick={() => setPaymentMethod('mastercard')} style={{ opacity: paymentMethod === 'mastercard' ? 1 : 0.5 }} />
            <button
              type="button"
              className="h-10 border border-gray-400 rounded px-4 hover:bg-gray-200"
              onClick={() => alert('Add new payment method - implement as needed')}
            >
              + Add
            </button>
          </div>

          {errors.paymentMethod && (
            <p className="text-red-600 text-sm mt-2">{errors.paymentMethod}</p>
          )}

          {/* Cash on delivery radio */}
          <label className="flex items-center mt-4 space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-[#00B4D8] text-black py-2 rounded-lg hover:bg-[#1c545f] text-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
