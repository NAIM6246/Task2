import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      window.alert("all fields are required");
    } else {
      console.log(email, password);

      let data = {
        name,
        email,
        password,
      };
      console.log(data);

      axios
        .post("http://127.0.0.1:5000/users/", data)
        .then((response) => {
          if (response.status === 201) {
            console.log(response.data);
            console.log("registration successful");
            localStorage.setItem("uid", response.data.ID);
            // localStorage.setItem("isAuth", true);
            setAuth(true);
            navigate("/");
          }
        })
        .catch((error) => {
          window.alert("registration failed");
        });
      console.log("requested");
    }
  };
  return (
    <div className="form">
      <h1>User Registration</h1>
      <form>
        <label>Name</label>
        <input onChange={handleName} value={name} type="text" />

        <label>Email</label>
        <input onChange={handleEmail} value={email} type="email" />

        <label>Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <div className="button">
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
