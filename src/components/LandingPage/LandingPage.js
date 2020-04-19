import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CarouselFade from "../CarouselFade/CarouselFade";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Link className="" to="/home">
        <CarouselFade />
        <p className="LandingPage-text">Click Here to Enter</p>
      </Link>
    </div>
  );
}

export default LandingPage;
