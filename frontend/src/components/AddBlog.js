import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {

    const [description,setDescription] = useState('');
    const [title,setTitle] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate =new  useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("submitted");
        navigate("/");
    }
    const handleDescription =(e) => {
        setDescription(e.target.value)
    }
    const handleTitle =(e) => {
        setTitle(e.target.value)
    }
    return (
        <div className="form">
            <div>
                <h1>Create post</h1>
            </div>
        
            <form>
                <label >Title</label>
                <input onChange={handleTitle} value={title} className="input" type="text" />
        
                <label>Description</label>
                <input onChange={handleDescription} className="description"
                value={description} type="text" />
        
                <button onClick={handleSubmit} type="submit">
                Submit
                </button>
            </form>
        </div>
    )
}

export default AddBlog;