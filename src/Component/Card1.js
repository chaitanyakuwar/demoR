import React from "react";

export const Card1 = (props) => {
  return (
    <>
      <div className="container-fluid" id="card-box">
      <div className="container " id="card-container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src={props.images1}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://img.freepik.com/premium-photo/female-sports-clothing-relaxing-after-workout_157927-19464.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/muscular-young-woman-athlete-posing-studio_155003-1855.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/muscular-young-woman-athlete-posing-studio-lilac-background_155003-16379.jpg?t=st=1669518379~exp=1669518979~hmac=0ee2bc0cc5a087a650d19b4779fd712c0cb1a740fd2ef18f817f63705e8325d4" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
