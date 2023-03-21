// App.js
import React from 'react';
import Slider from "react-slick";
import './Slider1.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider1() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };

  const slidesData = [
    {
      id: 1,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_KnockattheCabin/613afc14-27cb-4b3d-8d1e-4b02c5de8c91._UR3000500_SX3000_FMwebp_.jpeg"
    }, {
      id: 2,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Smile/3432ace6-7228-4c85-a00c-3b2b4ca4777c._UR3000500_SX3000_FMwebp_.jpeg"
    }, {
      id: 3,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_PussinBootsLastWish/5a81456e-70a7-4d80-abc1-5a4c3b1a8acc._UR3000500_SX3000_FMwebp_.jpeg"
    }, {
      id: 4,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Megan/39bff1d7-70ad-484b-96e2-afeb69182552._UR3000500_SX3000_FMwebp_.jpeg"
    }, {
      id: 5,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_ZackSnyderJusticeLeague/6450b104-9933-41d6-ae2d-0c3f446b8159._UR1600500_SX3000_FMwebp_.jpeg"
    }, {
      id: 6,
      imge:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Bandit/27cfde16-625f-490f-9d19-bec7ad5e47ef._UR3000500_SX3000_FMwebp_.jpeg"
    },
  ];

  return (
    <div className="App">

      <div className="slider-wrapper">

        <Slider {...settings}>

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={slide.imge} />
            </div>

          )}
        </Slider>

      </div>

    </div>
  );
}

export default Slider1;