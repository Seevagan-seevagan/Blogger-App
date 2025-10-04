import React, { useState } from "react";
import { signup } from "../../Firebase/authService";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert("Signup successful!");
      navigate("/dashboard"); // 🔑 signup success → dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    // <form onSubmit={handleSignup}>
    //   <h2>Signup</h2>
    //   <input type="email" placeholder="Email" value={email}
    //     onChange={(e) => setEmail(e.target.value)} required />
    //   <input type="password" placeholder="Password" value={password}
    //     onChange={(e) => setPassword(e.target.value)} required />
    //   <button type="submit">Signup</button>
    // </form>

     <div className="body">
        <div className="box pt-4 mb-5 ">
          <form onSubmit={handleSignup}>
            <h2 className="login-title text-center">SIGN UP HERE</h2>
    
           
            <input
              type="email"
              placeholder="Email"
              className="txt1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
    
            <input
              type="password"
              placeholder="Password"
              className="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
    
            <br />
            <button className="login-btn2 mt-5" type="submit">
              Sign Up
            </button>
    
           
    
          </form>
        </div>
        </div>
  );
}

export default Signup;
