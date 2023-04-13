import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Freelance</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Explore Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}
