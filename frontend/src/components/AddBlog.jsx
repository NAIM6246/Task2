import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // const [authorID, setAuthorID] = useState("");
  const navigate = new useNavigate();

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      window.alert("title or description can not be empty");
    } else {
      let data = {
        title,
        description,
        authorID: localStorage.getItem("uid"),
      };
      console.log(data);

      axios
        .post("http://127.0.0.1:5000/blogs/", data)
        .then((response) => {
          if (response.status === 201) {
            navigate("/");
          }
        })
        .catch((error) => {
          window.alert("failed to create a post",error);
        });
    }
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
        <textarea
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
