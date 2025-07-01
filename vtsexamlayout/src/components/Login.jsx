import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  localStorage.removeItem("examUser");
}, []);


  useEffect(() => {
    const user = localStorage.getItem("examUser");
    if (user) {
      navigate("/home");  
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password");
      return;
    }

    if (email === "student@example.com" && password === "exam123") {
      localStorage.setItem("examUser", JSON.stringify({ email }));
      navigate("/home");  
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <>
  
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">Email Address</label>
        <div className="password-container">
          <input
            type="email"
            id="email"
            placeholder="Enter your Mail id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
         <p className="login-hint">Hint: Email Address: student@example.com <br/> Password: exam123</p>
      </form>

</div>
         
            </>
  );
};

export default Login;
