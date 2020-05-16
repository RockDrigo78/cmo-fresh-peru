import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import fruits from "../../assets/images/fruits.jpg";

function LandingPage() {
  return (
    <div className="LandingPage">
    <img className="LandingPage-image" src={fruits} alt="fruits" />
      <Link className="" to="/home">
        <p className="LandingPage-text">Click Here to Enter</p>
      </Link>
    </div>
  );
}

export default LandingPage;
