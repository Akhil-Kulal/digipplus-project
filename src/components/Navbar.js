import React, { useState } from "react";
import "../assets/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Digipplus</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/my-jobs">My Jobs</a>
        <a href="/my-payment">My Payment</a>
        <a href="/my-offerletter">My Offerletter</a>
        <a href="/my-certificate">My Certificate</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
