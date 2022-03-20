import React from "react";
import { Image } from "react-bootstrap";
import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">Logo</div>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
