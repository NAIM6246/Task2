import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';
import UserBlogs from './components/UserBlogs';
import UserProfile from './components/UserProfile';

function App() {
  const isLoggedin = localStorage.getItem("isAuth");
  const [isAuth, setAuth] =  useState(isLoggedin);
  console.log("auth " ,isAuth);

  return (
    <div >
      <header>
        <title>Blog App</title>
      </header>
      <Header/>
      
      <Router>
        <nav className='navbar'>
          {console.log("auth " ,isAuth)}
            <Link to="/">Home</Link>
            { !isAuth ? <Link to="/login">Login</Link> : <></>}
            { isAuth && <Link to="/blogs/add">Create Post</Link>}
            {/* <Link to="/users/:id">Profile</Link> */}
        </nav>

        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/login" element={<Login setAuth={setAuth}/>}/>
          <Route path='/register' element={<Register setAuth={setAuth}/>} />
          <Route path='/blogs/add' element={<AddBlog/>} />
          <Route path='/blogs/:id' element={<BlogDetails/>} />
          <Route path='/users/:id/blogs' element={<UserBlogs/>} />
          <Route path='/users/:id' element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
