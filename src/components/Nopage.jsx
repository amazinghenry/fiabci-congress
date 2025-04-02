import React from "react";
import "./Nopage.css";

const Nopage = () => {
  return (
    <div className="container nopage-container">
      <h1>PAGE DOES NOT EXIST</h1>
      <a href="/" className="nopage-return btn btn-danger">
        Return Home
      </a>
    </div>
  );
};

export default Nopage;
