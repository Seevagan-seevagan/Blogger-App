import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Layout/Nav";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and Content are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/blogs", {
        title,
        content,
      });

      alert("✅ Post Published Successfully!");
      navigate("/home"); // redirect back to home page
    } catch (err) {
      console.error("❌ Error publishing post:", err);
      alert("Failed to publish post. Check console for details.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <Navbar />
      <h1 style={{ marginBottom: "20px" }}>✍️ Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "18px",
          }}
        />

        <textarea
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            height: "200px",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#ff5722",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Publish
        </button>
      </form>
    </div>
  );
}
