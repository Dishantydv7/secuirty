"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="border-2 border-white m-4 p-2">
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
                <div className="border-2 border-white m-4 p-2">
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
                <div className="border-2 border-white m-4 p-2">
                    
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
                <div className="border-2 border-white m-4 p-2">
                   
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
                <div className="border-2 border-white m-4 p-2">
                   
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
                <div className="border-2 border-white m-4 p-2">
                   
                    <img
                        src={"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                        }
                    />
                </div>
            </Slider>
        </div>
    );
}

export default PauseOnHover;