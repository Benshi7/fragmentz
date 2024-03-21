import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselComponent() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Velocidad de cambio de imagen en milisegundos
    };
  
    return (
          <Slider {...settings}>
            <div className="">
              <img className="w-full" src="https://uploads-ssl.webflow.com/638a9c0b679b62447407083b/638b1fa6efc521f140ebccb4_Screenshot%202022-12-03%20at%2011.04.08.png" alt="Imagen 1" />
            </div>
            <div className="">
              <img className="w-full" src="https://uploads-ssl.webflow.com/638a9c0b679b62447407083b/638b1fc3efc521b1c6ebcf19_Screenshot%202022-12-03%20at%2011.06.48.png" alt="Imagen 2" />
            </div>
            <div className="">
              <img className="w-full" src="https://uploads-ssl.webflow.com/638a9c0b679b62447407083b/638b32800787c75ae5cdf4b7_Screenshot%202022-12-03%20at%2012.26.26.png" alt="Imagen 3" />
            </div>
          </Slider>
    );
  }