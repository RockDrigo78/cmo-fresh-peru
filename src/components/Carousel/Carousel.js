import React from "react";
import Slider from "react-slick";
import cmo01 from "../../assets/images/cmo01.jpg";
import cmo02 from "../../assets/images/cmo02.jpg";
import cmo03 from "../../assets/images/cmo03.jpg";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      pauseOnHover: true,
      easing: 'easeOut',
      className: 'Carousel'
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="prices-background" src={cmo01} alt="prices" />
        </div>
        <div>
          <img className="prices-background" src={cmo02} alt="prices" />
        </div>
        <div>
          <img className="prices-background" src={cmo03} alt="prices" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
