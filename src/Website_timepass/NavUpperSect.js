import React from "react";
import "./Website.css";

const NavUpperSect = () => {
  return (
    <>
      <div class="card" id='main-header_nav'>
        {/* <h5 class="card-header">Featured</h5> */}
        <div class="card-body">
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <div className="row row-cols-1 row-cols-md-3 row-cols-sm-3">
            <div className="col col-md-4 col-sm-4 icon-list">
              <pre>
                <i class="bi bi-facebook"></i>

                <i class="bi bi-twitter"></i>

                <i class="bi bi-instagram"></i>
              </pre>
              {/* <i class="bi bi-facebook"></i> */}
            </div>
            <div className="col col-md-4 col-sm-4">
              <h3 id="Logo">
                <span id="span-logo1">PUBLISHING </span>
                <span id="span-logo2">COMPANY</span>
              </h3>
              BOOK PUBLISHING COMPANY
            </div>
            <div className="col col-md-4 col-sm-4">
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavUpperSect;
