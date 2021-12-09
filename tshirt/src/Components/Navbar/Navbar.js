import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar__logo">
        <img src="" alt="Logo" />
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <br />
        <Link to="/product">Products</Link>
        <br />
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
