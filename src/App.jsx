// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Index from "./pages/Index";
import NewPost from "./pages/NewPost";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Routes>
      {/* Landing page (Navbar இல்லாமல்) */}
      <Route path="/" element={<Landing />} />

      {/* Login / Signup */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/index" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/edit/:id" element={<EditPost />} />

      {/* Dashboard (Navbar + Logout button only after login) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
