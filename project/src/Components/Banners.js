import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../Assets/000_32LY6Z7.webp";
import indImg from "../Assets/india.jpg";
import "../CSS/Banner.css";

const Banners = () => {
  return (
    <div className="banner-container">
      <Carousel className="carousel">
        <Carousel.Item interval={1000} className="carousel-imgs">
          <img className="images" src={indImg} alt="" />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className="carousel-imgs">
          <img src={img} alt="" />
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-imgs">
          <img src={img} alt="" />
          <Carousel.Caption className="caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banners;
