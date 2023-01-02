import React from "react";
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div class="card text-center" id="footer">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <ul>
                  <li>
                    <Link to='/about'><h5>About</h5></Link>
                  </li>
                  <li>Fees</li>
                  <li>Quality</li>
                  <li>Contact</li>
                  <li>Servises</li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li>
                    <h5>About</h5>
                  </li>
                  <li>Fees</li>
                  <li>Quality</li>
                  <li>Contact</li>
                  <li>Servises</li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li>
                    <h5>About</h5>
                  </li>
                  <li>Fees</li>
                  <li>Quality</li>
                  <li>Contact</li>
                  <li>Servises</li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li>
                    <h5>About</h5>
                  </li>
                  <li>Fees</li>
                  <li>Quality</li>
                  <li>Contact</li>
                  <li>Servises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
