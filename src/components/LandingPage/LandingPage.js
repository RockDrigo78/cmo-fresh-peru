import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CarouselFade from "../CarouselFade/CarouselFade";
// import fruits from "../../assets/images/berries-medium.jpg";

function LandingPage() {
  return (
    <div className="LandingPage">
      {/* <img className="LandingPage-image" src={fruits} alt="fruits" /> */}
      <Link className="" to="/home">
        <CarouselFade />
        <div>
          <p className="LandingPage-text">Click Here to Enter</p>
        </div>
      </Link>
    </div>
  );
}

export default LandingPage;
