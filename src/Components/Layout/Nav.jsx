// src/Components/Layout/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Firebase/authService";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/"); 
  };

  

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Blogger</h2>
      <div style={styles.links}>
        {location.pathname !== "/dashboard" && (
          
          <Link className="nav-item btn btn-info" to="/dashboard">
            Dashboard
          </Link>
        )}

        
        {location.pathname === "/dashboard" && (
          <Link className="nav-item btn btn-info" to="/home">
            Blogs
          </Link>
        )}
        <button
          style={{ ...styles.btn, backgroundColor: "#ff4d4d" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#0b4867ff",
    color: "white",
    
  },
  logo: { fontSize: "20px", fontWeight: "bold" },
  links: { display: "flex", gap: "12px" },
  btn: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#ff0000ff",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;
