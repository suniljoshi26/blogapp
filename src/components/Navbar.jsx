import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {" "}
      <div className="container">
        <div className="logo">
          {" "}
          <h6>logo </h6>
        </div>

        <div className="links">
          <Link className="link">
            <h6>ART </h6>
          </Link>
          <Link className="link">
            <h6>SCIENCR</h6>
          </Link>
          <Link className="link">
            <h6> TECHNOLOGY </h6>
          </Link>
          <Link className="link">
            <h6>CINEMA </h6>
          </Link>
          <Link className="link">
            <h6>DESIGN </h6>
          </Link>
          <Link className="link">
            <h6>FOOD </h6>
          </Link>
          <span>sunil</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
