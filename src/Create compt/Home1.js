import React from "react";

export const Home1 = () => {
  return (
    <>
      <div className="container-fluid gy-2cd ">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/868dafcc8fa27ecd.jpg?q=50" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
