// src/Components/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import '../pages/Home.css'

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container} className="container">
      <h1 style={styles.title}>Welcome to Blogger 🚀</h1>
      <div style={styles.buttons}>
        <button style={styles.btn} onClick={() => navigate("/login")}>
          Login
        </button>
       
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #164111ff, #024a44ff)",
    color: "white",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  btn: {
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Landing;
