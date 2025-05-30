import React from "react";
import { Link } from "react-router-dom";
import Wholepage from "../Wholepage";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <h4>
          <b>REACT LANDING PAGE</b>
        </h4>

        <div className="links d-flex flex-row flex-wrap">
          <a href="#features" className="nav-links ">
            Features
          </a>
          <a href="#about" className="nav-links">
            About
          </a>
          <a href="#services" className="nav-links">
            Services
          </a>
          <a href="#gallery" className="nav-links">
            Gallery
          </a>
          <a href="#testimonials" className="nav-links">
            Testimonials
          </a>
          <a href="#team" className="nav-links">
            Team
          </a>
          <a href="#contact" className="nav-links">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
