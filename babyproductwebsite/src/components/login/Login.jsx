// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import authLeftImg from '../../assets/images/Baby-img.png';
import { findUserByEmailOrPhone, setCurrentUser } from '../utils/auth';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/';
  const [form, setForm] = useState({ contact: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = form.contact.trim();
    if (!contact || !form.password) {
      setError('Please fill all fields');
      return;
    }

    const user = findUserByEmailOrPhone(contact);
    if (!user) {
      setError('No account found. Redirecting to sign up...');
      setTimeout(() => navigate('/signup'), 1200);
      return;
    }

    if (user.password !== form.password) {
      setError('Incorrect password');
      return;
    }

    // success
    setCurrentUser(user);
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img src={authLeftImg} alt="login" className="w-full h-full object-contain" />
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">Log in</h2>
          <p className="text-sm text-black mb-6">Enter your details below</p>

          {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="E-mail or Phone Number"
                className="w-full border-0 border-b border-gray-300 focus:border-cyan-600 outline-none px-0 py-2"
              />
            </div>

            <div>
              
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-0 border-b border-gray-300 focus:border-cyan-600 outline-none px-0 py-2"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="h-px bg-gray-200 flex-1" />
             
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div
              onClick={() => alert('Google Sign-In not functional')}
              className="mt-2 flex items-center justify-center gap-2 border border-gray-300 rounded px-3 py-2 cursor-pointer hover:bg-gray-50"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Sign in with Google</span>
            </div>

            <button type="submit" className="w-full mt-3 bg-[#9cd2e2] hover:bg-cyan-700 text-black py-2 rounded">
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="text-cyan-600 font-medium">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
