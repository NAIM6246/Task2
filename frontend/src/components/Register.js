import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    console.log('submitted');
    e.preventDefault();
    if (email === '' || password === '' || name ==='') {
      window.alert('all fields are required')
    } else {
        console.log(email,password);

        let data = {
            name,
            email,
            password
        };
        console.log(data)

        axios.post("http://127.0.0.1:5000/users/",data)
            .then((response)=>{
                if(response.status === 200) {
                    console.log("registration successful");
                    navigate("/");
                }
            })
            .catch((error) => {
                window.alert("registration failed");
            })
            console.log('requested')
          
    }

  };
    return (
        <div className="form">
          <div>
            <h1>User Registration</h1>
          </div>
     
          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input onChange={handleName} className="input"
              value={name} type="text" />
     
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
        </div>
      );
}

export default Register;