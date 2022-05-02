import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../Assets/images/banners/banner1.jpg";
import Banner2 from "../../../Assets/images/banners/banner2.jpg";
import Banner3 from "../../../Assets/images/banners/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
