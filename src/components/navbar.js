import React from "react";
import "../assets/navbar/navbar.css";

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
