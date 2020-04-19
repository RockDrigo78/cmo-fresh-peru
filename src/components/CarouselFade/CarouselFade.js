import React from "react";
import "./CarouselFade.css";
import cmo01 from "../../assets/images/cmo01.jpg";
import cmo03 from "../../assets/images/cmo03.jpg";
import cmo04 from "../../assets/images/cmo04.jpg";

function CarouselFade() {
  return (
    <div className="CarouselFade">
      <ul className="CarouselFade-slideshow">
        <li>
          <img className="CarouselFade-img" src={cmo01} alt="cmo01" />
        </li>
        <li>
          <img className="CarouselFade-img" src={cmo03} alt="cmo03" />
        </li>
        <li>
          <img className="CarouselFade-img" src={cmo04} alt="cmo04" />
        </li>
      </ul>
    </div>
  );
}

export default CarouselFade;
