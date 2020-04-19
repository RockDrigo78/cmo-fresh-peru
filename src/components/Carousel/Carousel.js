import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import asparagus04 from "../../assets/images/asparagus04.jpg";
import avocados04 from "../../assets/images/avocados04.jpg";
import arandanos02 from "../../assets/images/arandanos02.jpg";
import asparagus05 from "../../assets/images/asparagus05.jpg";
import grapes01 from "../../assets/images/grapes01.jpg";

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4500,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      easing: "ease",
      className: "Carousel",
    };

    return (
      <Slider {...settings}>
        <div className="item-1">
          <img src={asparagus04} alt="cmo-pic" />
          <div className="carousel-text-container">
            <p className="carousel-text-title">QC Pre-Departure</p>
            <hr />
            <p className="carousel-text-content">in Peru: Per Day Visit</p>
            <p className="carousel-text-content">
              in Mx & CL: Per Period Visit
            </p>
          </div>
        </div>
        <div className="item-2">
          <img src={avocados04} alt="cmo-pic" />
          <div className="carousel-text-container">
            <p className="carousel-text-title">Customised Product Statistics</p>
            <hr />
          </div>
        </div>
        <div className="item-3">
          <img src={arandanos02} alt="cmo-pic" />
          <div className="carousel-text-container">
            <p className="carousel-text-title">
              Commercial Inteligence / Product
            </p>
            <hr />
            <p className="carousel-text-content">Only on AS+AVO+MAN+BLA</p>
          </div>
        </div>
        <div className="item-4">
          <img src={asparagus05} alt="cmo-pic" />
          <div className="carousel-text-container">
            <p className="carousel-text-title">Purchasing Agency</p>
            <hr />
            <p className="carousel-text-content">Only on AS+AVO+MAN+BLA</p>
          </div>
        </div>
        <div className="item-5">
          <img src={grapes01} alt="cmo-pic" />
          <div className="carousel-text-container">
            <p className="carousel-text-title">
              Season Advances / Loans Controls
            </p>
            <hr />
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
