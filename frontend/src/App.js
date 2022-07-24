import React from 'react';
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
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
  return (
    <div >
      <header>
        <title>Blog App</title>
      </header>
      <Header/>
      
      <Router>
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="register">Register</Link>
        </nav>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/addblog' element={<AddBlog/>} />
          <Route path='/blog/:id' element={<BlogDetails/>} />
          <Route path='/users/:id/blogs' element={<UserBlogs/>} />
          <Route path='/users/:id' element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
