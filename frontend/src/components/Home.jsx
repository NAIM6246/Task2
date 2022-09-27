import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/blogs", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data);
    });
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <BlogDetails title={blog.title} description={blog.description} />
        ))}
    </div>
  );
};

export default Home;
