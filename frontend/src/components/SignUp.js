import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  // Include "name" in the state
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      // Send the sign-up data to the backend
      const response = await axios.post("/register", signUpData);
      console.log("Sign up successful:", response.data);
    } catch (error) {
      console.error(
        "Error sending sign up data to API:"
      );
    }
  };

  return (
    <div className="bg-blue-500 h-12 flex justify-center">
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label className="name mr-4">
          Enter your name:
          <input
            type="text"
            className="outline-red-600"
            value={signUpData.name} // Bind to name
            onChange={(e) => {
              console.log("Name input changed:", e.target.value);
              setSignUpData({ ...signUpData, name: e.target.value });
            }}
          />
        </label>

        {/* Email Field */}
        <label className="email mr-4">
          Enter your email:
          <input
            type="text"
            className="outline-red-600"
            value={signUpData.email} // Bind to email
            onChange={(e) => {
              console.log("Email input changed:", e.target.value);
              setSignUpData({ ...signUpData, email: e.target.value });
            }}
          />
        </label>

        {/* Password Field */}
        <label className="pass mr-4">
          Enter your password:
          <input
            type="password"
            value={signUpData.password} // Bind to password
            onChange={(e) => {
              console.log("Password input changed:", e.target.value);
              setSignUpData({ ...signUpData, password: e.target.value });
            }}
          />
        </label>

        {/* Submit Button */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;