import React, { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // TODO: Add your password reset logic here (e.g., API call)
    setSuccess("Password reset link sent to your email.");
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <div className="relative w-[550px] h-[400px] bg-[#ffefd0] rounded-2xl shadow-xl px-8 pt-16 pb-8 flex flex-col">

        {/* Floating heading */}
        <h2 className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#A7C957] text-black text-lg font-bold px-6 py-2 rounded-full shadow-md z-10">
          Forget Password
        </h2>

        {/* Error / Success messages */}
        {error && <p className="text-center text-red-600 mb-4">{error}</p>}
        {success && <p className="text-center text-green-600 mb-4">{success}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow" noValidate>
          <label className="block font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-red-200 rounded-full px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold shadow-md"
          >
            Submit
          </button>

          {/* Policy Text */}
          <p className="text-center text-gray-600 text-xs mt-6">
            By joining and using Flavor Theory Academy platform, you agree to our{" "}
            <a href="/terms" className="underline hover:text-blue-600">
              Terms
            </a>{" "}
            &{" "}
            <a href="/policies" className="underline hover:text-blue-600">
              Policies
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
}
