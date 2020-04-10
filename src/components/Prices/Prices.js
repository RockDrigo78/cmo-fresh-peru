import React from "react";
import prices from "../../assets/images/prices01.jpeg";
import "./Prices.css";

function Prices() {
  return (
    <div className="Prices">
      <img className="prices-background" src={prices} alt="prices" />
    </div>
  );
}

export default Prices;
