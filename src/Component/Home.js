import React from "react";
import { Card1 } from "./Card1";
import "./Style1.css";


export const Home = () => {
  const card_img={
    images:'https://img.freepik.com/free-photo/muscular-young-woman-athlete-posing-studio-lilac-background_155003-16379.jpg?t=st=1669518379~exp=1669518979~hmac=0ee2bc0cc5a087a650d19b4779fd712c0cb1a740fd2ef18f817f63705e8325d4'
  }
  return (
    <>
      {/* <div className="bg-image container-fluid">
        <div className="Text">
          <div id="Heading">
            <h1>
              Build Perfect Body <br /> With Clean Mind
            </h1>
            <div id="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div> */}
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/sideways-full-image-attractive-muscular-young-woman-practicing-hatha-yoga-gym-standing-barefooted-mat-virabhadrasana-2-warrior-two-pose-having-concentrated-facial-expression_343059-3121.jpg?w=996&t=st=1669483094~exp=1669483694~hmac=ac17213b4155462a2953b83ae0459a37e37b9eac5f17eff906ab0eb486e76a58" class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div> */}
  </div>
</div>
      <Card1/>
      <Card1 images1={card_img.images}/>
      <Card1/>
      <Card1/>

    </>
  );
};
