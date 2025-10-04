import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    console.log("Fetching Blog ID:", id);
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        console.log("Blog Data:", res.data);
        setForm(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        if (err.response?.status === 404) {
          alert("Blog not found!");
          navigate("/");
        }
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, form);
      alert("Blog updated!");
      navigate("/home");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed! Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          style={{ width: "100%", marginBottom: "10px", fontFamily: 'Poppins' }}
        />
        <textarea
          value={form.content}
          className="p-2"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Content"
          rows={5}
          style={{ width: "100%", marginBottom: "10px", fontFamily: 'Poppins' }}
        />
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
}

export default EditPost;
