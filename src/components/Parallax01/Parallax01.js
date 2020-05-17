import React from "react";
import "./Parallax01.css";
import statMobile from "../../assets/images/statistics-mobile03-small.jpg";
import statDesktop from "../../assets/images/statistics-pc03-small.jpg";

function Parallax01() {
  return (
    <div className="Parallax01">
      <div className="Parallax01-background">
        <div className="Parallax01-text-title">
          <p>Customised Product Statistics</p>
        </div>
      </div>
      <div className="Parallax01-row-container">
        <img className="Parallax01-row-image" src={statMobile} alt="mobile statistics" />
        <div className="Parallax01-text-content">
          <ul>
            <li>100.000 containers exported per year</li>
            <li>100 countries in the world</li>
            <li>Billions of USD in FOB terms</li>
            <li>Importers and Exporters identified</li>
          </ul>
        </div>
      </div>
      <div className="Parallax01-row-container">
        <div className="Parallax01-text-content">
          <ul>
            <li>100.000 containers exported per year</li>
            <li>100 countries in the world</li>
            <li>Billions of USD in FOB terms</li>
            <li>Importers and Exporters identified</li>
          </ul>
        </div>
        <img className="Parallax01-row-image" src={statDesktop}  alt="desktop statistics"/>
      </div>
    </div>
  );
}

export default Parallax01;
