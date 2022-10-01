import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);

  let navigate = useNavigate();

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    // setSubmitted(true);
    e.preventDefault();
    if (email === "" || password === "") {
      window.alert("invalid email or password");
    } else {
      console.log(email, password);
      setAuth(true);

      let data = {
        email,
        password,
      };
      console.log(data);

      axios
        .post("http://127.0.0.1:5000/users/login", data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data);
            localStorage.setItem("isAuth", true);
            console.log("login successful");
            navigate("/");
          }
        })
        .catch((error) => {
          window.alert("login failed", error);
        });
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div>
      <div className="form">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input onChange={handleEmail} value={email} type="email" />

          <label>Password</label>
          <input onChange={handlePassword} value={password} type="password" />
          <div className="button">
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
        <button className="btn-solid" onClick={handleRegistration}>
          Don't have an account? Register here...
        </button>
      </div>
    </div>
  );
};

export default Login;
