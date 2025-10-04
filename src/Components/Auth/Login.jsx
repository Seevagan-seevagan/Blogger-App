import React, { useState } from "react";
import { login } from "../../Firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/dashboard"); // 🔑 login success → dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="body">
    <div className="box pt-4">
      <form onSubmit={handleLogin}>
        <h2 className="login-title text-center">LOG IN HERE</h2>

       
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
        <button className="login-btn2" type="submit">
          Login
        </button>

        <p className="par2">
          Don't have an account? <br />
          {/* React Router link instead of signup.html */}
          <Link to="/signup">Sign up</Link> here
          <br />
        
        </p>

      </form>
    </div>
    </div>
  );
}

export default Login;
