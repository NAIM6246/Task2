import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = ( {setAuth} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);
 
  let navigate = useNavigate(); 
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    console.log('submitted');
    e.preventDefault();
    if (email === '' || password === '') {
      window.alert('invalid email or password')
    } else {
        console.log(email,password);
        setAuth(true);
        localStorage.setItem("isAuth", true);

        let data = {
            email,
            password
        };
        console.log(data)

        axios.post("http://127.0.0.1:5000/users/login",data)
            .then((response)=>{
                if(response.status == 201) {
                    localStorage.setItem('token',response.data);
                    console.log("login successful");
                    navigate("/");
                }
            })
            .catch((error) => {
                window.alert("login failed");
            })
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    navigate("/register");
  }

    return (
        <div className="form">
          <div>
            <h1>Login</h1>
          </div>
     
          <form>     
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
              value={email} type="email" />
     
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
              value={password} type="password" />
     
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
          <p onClick={handleRegistration} >Don't have an account? Register here...</p>
        </div>
    )
}

export default Login;