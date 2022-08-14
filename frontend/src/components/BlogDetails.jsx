import React from "react";

const BlogDetails = ({ title, description }) => {
  return (
    <div className="blog">
      <h3>{title}</h3>
      {/* <hr /> */}
      <p>{description}</p>
    </div>
  );
};

export default BlogDetails;
