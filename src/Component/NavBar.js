import React from "react";
// import './Style1.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-Dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/home'>
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/home'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/service'>
               Services
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
