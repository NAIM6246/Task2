import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [authorID, setAuthorID] = useState("");
  const navigate = new useNavigate();

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  //   const handleAuthorID = (e) => {
  //     setAuthorID(e.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
    };

    console.log(data);
    navigate("/");
  };
  return (
    <div className="form">
      <h1>Create post</h1>
      <form>
        <label>Title</label>
        <input
          onChange={handleTitle}
          value={title}
          className="input"
          type="text"
        />

        <label>Description</label>
        <input
          onChange={handleDescription}
          className="description"
          value={description}
          type="text"
        />
        <div className="button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
