import React from "react";
import prices from "../../assets/images/services01.jpeg";
import "./Services.css";

function Services() {
  return (
    <div className="Services">
      <img className="services-background" src={prices} alt="services" />
    </div>
  );
}

export default Services;
