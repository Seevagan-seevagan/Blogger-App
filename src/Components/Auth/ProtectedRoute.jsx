import React, { useEffect, useState } from "react";
import { auth } from '../../Firebase/authService'; // ✅ now this works
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined → means "loading"

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // While Firebase is checking user state
  if (user === undefined) {
    return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;
  }

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in
  return children;
}

export default ProtectedRoute;
