import React from "react";
import "./CustomProductStatistics.css";
import statMobile from "../../assets/images/statistics-mobile03-small.jpg";
import statDesktop from "../../assets/images/statistics-pc03-small.jpg";
import Formular from "../Formular/Formular";

function CustomProductStatistics() {
  return (
    <div className="CustomProductStatistics" id="custom-product-statistics">
      <div className="CustomProductStatistics-background">
        <div className="CustomProductStatistics-text-title">
          <p>Custom Product Statistics</p>
          <hr />
        </div>
      </div>
      <div className="CustomProductStatistics-col">
        <div className="CustomProductStatistics-row-container">
          <img
            className="CustomProductStatistics-row-image"
            src={statMobile}
            alt="mobile statistics"
          />
          <div className="CustomProductStatistics-text-content">
            <div>100.000 containers exported per year</div>
            <div>100 countries in the world</div>
          </div>
        </div>
        <div className="CustomProductStatistics-row-container">
          <div className="CustomProductStatistics-text-content">
            <div>Billions of USD in FOB terms</div>
            <div>Importers and Exporters identified</div>
          </div>
          <img
            className="CustomProductStatistics-row-image"
            src={statDesktop}
            alt="desktop statistics"
          />
        </div>
      </div>
      <Formular />
    </div>
  );
}

export default CustomProductStatistics;
