import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheet.css";

export const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white" id="nav1">
        <div className="container-fluid">
          <a className="navbar-brand" to="/home">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
              <Link className="nav-link" href="#">
                Features
              </Link>
              <Link className="nav-link" href="#">
                Pricing
              </Link>

              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12">
                  <form className="d-flex">
                    <input
                      className="form-control "
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
