import React, { useState } from "react";


const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <h2>Create an account</h2>
      <p>Enter your information to register</p>
      <form>
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Last name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >👁</span>
        </div>
        
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >👁</span>
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
