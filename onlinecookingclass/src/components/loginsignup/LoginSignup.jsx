// import React, { useState,useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';



// export default function LoginSignup() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");
//   const [signupRePassword, setSignupRePassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirectPath = location.state?.from || "/";


//  const [searchParams] = useSearchParams();

// useEffect(() => {
//   const mode = searchParams.get("mode");
//   setIsLogin(mode !== "signup"); // update state instead of redefining variable
// }, [searchParams]);


//   const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
//   const validatePassword = pass => pass.length >= 6;

//   const handleSignup = e => {
//     e.preventDefault(); setError("");
//     if (!validateEmail(signupEmail)) return setError("Enter a valid email.");
//     if (!validatePassword(signupPassword))
//       return setError("Password must be at least 6 characters.");
//     if (signupPassword !== signupRePassword) return setError("Passwords do not match.");

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     if (users.some(u => u.email === signupEmail)) {
//       setError("User already registered. Please login.");
//       setIsLogin(true);
//       return;
//     }

//     users.push({ email: signupEmail, password: signupPassword });
//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("loggedInUser", signupEmail);
//     navigate(redirectPath, { replace: true });
//   };

//   const handleLogin = e => {
//     e.preventDefault(); setError("");
//     if (!validateEmail(loginEmail)) return setError("Enter a valid email.");
//     if (!validatePassword(loginPassword))
//       return setError("Password must be at least 6 characters.");

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(u => u.email === loginEmail);
//     if (!user) {
//       setError("User not registered. Please signup first.");
//       setIsLogin(false);
//       return;
//     }
//     if (user.password !== loginPassword) return setError("Incorrect password.");

//     localStorage.setItem("loggedInUser", loginEmail);
//     navigate(redirectPath, { replace: true });
//   };

//   return (
//     <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-yellow-100 p-8 rounded-2xl">
//         <div className="mb-6">
//           <h2 className="text-center text-lg font-bold text-green-600 bg-green-200 py-2 rounded-full">
//             {isLogin ? 'LOGIN' : 'SIGNUP'}
//           </h2>
//         </div>
//         {error && <p className="text-center text-red-600 mb-4">{error}</p>}
//         <form onSubmit={isLogin ? handleLogin : handleSignup} noValidate>
//           {!isLogin && (
//             <>
//               {/* Username if needed */}
//               {/* Render more fields here */}
//             </>
//           )}
//           <label className="block font-semibold text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             name={isLogin ? "loginEmail" : "signupEmail"}
//             value={isLogin ? loginEmail : signupEmail}
//             onChange={e =>
//               isLogin
//                 ? setLoginEmail(e.target.value)
//                 : setSignupEmail(e.target.value)
//             }
//             className="w-full border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//           />

//           <label className="block font-semibold text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             type="password"
//             name={isLogin ? "loginPassword" : "signupPassword"}
//             value={isLogin ? loginPassword : signupPassword}
//             onChange={e =>
//               isLogin
//                 ? setLoginPassword(e.target.value)
//                 : setSignupPassword(e.target.value)
//             }
//             className="w-full border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//           />

//           {!isLogin && (
//             <>
//               <label className="block font-semibold text-gray-700 mb-1">
//                 Re-enter Password
//               </label>
//               <input
//                 type="password"
//                 name="signupRePassword"
//                 value={signupRePassword}
//                 onChange={e => setSignupRePassword(e.target.value)}
//                 className="w-full border border-red-200 rounded-full px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold"
//           >
//             {isLogin ? 'LOGIN' : 'SUBMIT'}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-4">
//           {isLogin ? 'New user?' : 'Already registered?'}{' '}
//           <button
//             onClick={() => {
//               setIsLogin(!isLogin);
//               setError("");
//             }}
//             className="underline text-blue-600"
//           >
//             {isLogin ? 'Register' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams, Link } from "react-router-dom";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMobile, setSignupMobile] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const redirectPath = location.state?.from || "/";

  useEffect(() => {
    const mode = searchParams.get("mode");
    setIsLogin(mode !== "signup");
  }, [searchParams]);

  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = pass => pass.length >= 6;
  const validateMobile = mobile => /^[0-9]{10}$/.test(mobile);
  const validateName = name => /^[A-Za-z\s]+$/.test(name.trim());

  const handleSignup = e => {
    e.preventDefault();
    setError("");

    if (!validateName(signupName)) return setError("Enter a valid name (letters only).");
    if (!validateEmail(signupEmail)) return setError("Enter a valid email.");
    if (!validatePassword(signupPassword)) return setError("Password must be at least 6 characters.");
    if (!validateMobile(signupMobile)) return setError("Enter a valid 10-digit mobile number.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.email === signupEmail)) {
      setError("User already registered. Please login.");
      setIsLogin(true);
      return;
    }

    users.push({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      mobile: signupMobile,
    });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", signupEmail);
    navigate(redirectPath, { replace: true });
  };

  const handleLogin = e => {
    e.preventDefault();
    setError("");

    if (!validateEmail(loginEmail)) return setError("Enter a valid email.");
    if (!validatePassword(loginPassword)) return setError("Password must be at least 6 characters.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === loginEmail);
    if (!user) {
      setError("User not registered. Please signup first.");
      setIsLogin(false);
      return;
    }
    if (user.password !== loginPassword) return setError("Incorrect password.");

    localStorage.setItem("loggedInUser", loginEmail);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4 ">
      <div
  className={`relative w-[550px] ${
    isLogin ? "h-[500px]" : "h-[600px]"
  } bg-[#ffefd0] rounded-2xl shadow-xl px-8 pt-16 pb-8 flex flex-col`}
>


        <div className="mb-6">
          <h2 className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#A7C957] text-black text-2xl font-bold px-6 py-2 rounded-full shadow-md z-10">
  {isLogin ? "LOGIN" : "SIGNUP"}
</h2>
        </div>

        {error && <p className="text-center text-red-600 mb-4">{error}</p>}

        <form onSubmit={isLogin ? handleLogin : handleSignup} noValidate>
          {!isLogin && (
            <>
              <label className="block font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={signupName}
                onChange={e => setSignupName(e.target.value)}
                className="w-full mx-auto border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <label className="block font-semibold text-gray-700 mb-1">Mobile Number</label>
              <input
                type="text"
                value={signupMobile}
                onChange={e => setSignupMobile(e.target.value)}
                className="w-full border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </>
          )}

          <label className="block font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={isLogin ? loginEmail : signupEmail}
            onChange={e =>
              isLogin ? setLoginEmail(e.target.value) : setSignupEmail(e.target.value)
            }
            className="w-full border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <label className="block font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={isLogin ? loginPassword : signupPassword}
            onChange={e =>
              isLogin ? setLoginPassword(e.target.value) : setSignupPassword(e.target.value)
            }
            className="w-full border border-red-200 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Floating Button */}
          <button
  type="submit"
  className="w-full bg-red-400 hover:bg-red-500 text-white py-2 mt-4 rounded-full font-semibold shadow-md"
>

  {isLogin ? "SUBMIT" : "SUBMIT"}
</button>
  

        <div className="text-center text-sm text-gray-700 mt-2 space-x-4">
  {isLogin ? (
    <>
      <Link to="?mode=signup" className="underline hover:text-blue-600">Sign Up</Link>
      <span>|</span>
      <Link to="/forgot-password" className="underline hover:text-blue-600">Forgot Password?</Link>
    </>
  ) : (
    <>
      <Link to="?mode=login" className="underline hover:text-blue-600">Login</Link>
      <span>|</span>
      <Link to="/forgot-password" className="underline hover:text-blue-600">Forgot Password?</Link>
    </>
  )}
</div>

<p className="text-center text-gray-500 text-sm font-bold mt-4 px-2">
  By joining and using Flavor Theory Academy platform, you agree to our{" "}
  <Link to="/terms" className="underline hover:text-blue-600">Terms</Link> &{" "}
  <Link to="/policies" className="underline hover:text-blue-600">Policies</Link>.
</p>



        </form>

     
      </div>
    </div>
  );
}
