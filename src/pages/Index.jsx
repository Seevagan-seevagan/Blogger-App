import React from 'react'
import { useNavigate } from "react-router-dom";
import './Index.css'
import Navbar from '../Components/Layout/Nav';

function Index() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/new-post');

    }
  return (
 <>
<div className="index-page text-center">
  <Navbar/>
  <div className="index-overlay pt-5">
    <h1 className="title pt-5">Describe Your <span className='blog'>Blog!</span> </h1>
    <button className="create" onClick={handleClick}>
      Create a New Blog
    </button>
  </div>
</div>


 </>
  )
}

export default Index