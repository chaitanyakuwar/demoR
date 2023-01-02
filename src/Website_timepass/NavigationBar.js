import React from "react";
import NavUpperSect from "./NavUpperSect";
import "./Website.css";

const NavigationBar = () => {
  return (
    <>
      <NavUpperSect />

      {/* navigaion bar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark Nav-container">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul class="navbar-nav m-auto  mb-2 mb-lg-0 li-list">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  services
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="card bg-dark text-dark">
        <img
          src="https://preview.colorlib.com/theme/publishingcompany/images/bg_1.jpg.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title ">Good books don't give up <br /> all their secrets at once</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
