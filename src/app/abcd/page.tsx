"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";



function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div >
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div>
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div>
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div>
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div>
        <div className="border-white border-2 m-2 p-3">
          <img 
          src= "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
