import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Layout/Nav";
import './Home.css'


function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  
    

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then(res => setBlogs(res.data))
      .catch(err => console.error("Error fetching blogs:", err));
  }, []);

 const handleEdit = (id) => {
  console.log("Editing Blog ID:", id); 
  navigate(`/edit/${id}`);
};

  return (
    <div>
      <Navbar />
      <h1 className="p-5 ">All Blogs</h1>
      {blogs.length === 0 && <p>No blogs found.</p>}
      {blogs.map((blog) => (
        <div
          className="blog-card container"
          key={blog._id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>

          {/* Edit Button - pass correct ID */}
          <button
            onClick={() => { handleEdit(blog._id);
            }}
            style={{ marginRight: "10px" }}
            className="btn btn-success"
          >
             Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={async () => {
              try {
                await axios.delete(
                  `http://localhost:5000/api/blogs/${blog._id}`
                );
                alert("Blog Deleted!");
                window.location.reload();
              } catch (error) {
                alert("Failed to delete blog");
              }
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
