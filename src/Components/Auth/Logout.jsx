import React from "react";
import { logout } from "../../Firebase/authService";

function Logout() {
  const handleLogout = async () => {
    await logout();
    alert("Logged out!");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
