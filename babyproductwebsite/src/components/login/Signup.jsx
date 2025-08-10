// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authLeftImg from '../../assets/images/Baby-img.png';
import {
  findUserByEmailOrPhone,
  saveUser,
  setCurrentUser,
} from '../utils/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', contact: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    else if (!/^[A-Za-z\s]+$/.test(form.name.trim()))
      errs.name = 'Name must contain letters and spaces only';

    if (!form.contact.trim()) errs.contact = 'Email or phone is required';
    else {
      const val = form.contact.trim();
      const isPhone = /^\d{10}$/.test(val);
      if (!isPhone && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        errs.contact = 'Enter a valid email or 10-digit phone';
    }

    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6)
      errs.password = 'Password must be at least 6 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
    setServerMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerMsg('');
    if (!validate()) return;

    const contact = form.contact.trim();
    const existing = findUserByEmailOrPhone(contact);
    if (existing) {
      setServerMsg('Account already exists. Redirecting to Login...');
      setTimeout(() => navigate('/login'), 1200);
      return;
    }

    const isPhone = /^\d{10}$/.test(contact);
    const user = {
      id: Date.now(),
      name: form.name.trim(),
      email: isPhone ? null : contact.toLowerCase(),
      phone: isPhone ? contact : null,
      password: form.password,
      createdAt: new Date().toISOString(),
    };

    saveUser(user);
    setCurrentUser(user); // auto-login after signup
    navigate('/'); // go to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left image */}
        <div className="hidden md:block h-full">
          <img src={authLeftImg} alt="signup" className="w-full h-full object-contain" />
        </div>

        {/* Right form */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">Sign up</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

          {serverMsg && <div className="mb-3 text-sm text-red-600">{serverMsg}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
             
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full border-0 border-b border-gray-300 focus:border-cyan-600 outline-none px-0 py-2 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
            </div>

            <div>
              
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="E-mail or Phone Number"
                className={`w-full border-0 border-b border-gray-300 focus:border-cyan-600 outline-none px-0 py-2 ${errors.contact ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.contact && <div className="text-xs text-red-500 mt-1">{errors.contact}</div>}
            </div>

            <div>
            
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full border-0 border-b border-gray-300 focus:border-cyan-600 outline-none px-0 py-2 ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.password && <div className="text-xs text-red-500 mt-1">{errors.password}</div>}
            </div>

            {/* Google non-functional */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px bg-gray-200 flex-1" />

              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div
              onClick={() => alert('Google Sign Up not functional')}
              className="mt-2 flex items-center justify-center gap-2 border border-gray-300 rounded px-3 py-2 cursor-pointer hover:bg-gray-50"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Sign up with Google</span>
            </div>

            <button type="submit" className="w-full mt-3 bg-[#9cd2e2] hover:bg-cyan-700 text-black py-2 rounded">
              Create Account
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have account?{' '}
            <button onClick={() => navigate('/login')} className="text-cyan-600 font-medium">Log in</button>
          </p>
        </div>
      </div>
    </div>
  );
}
