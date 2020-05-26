import React from "react";
import "./CustomProductStatistics.css";
import statMobile from "../../assets/images/statistics-mobile03-small.jpg";
import statDesktop from "../../assets/images/statistics-pc03-small.jpg";

function CustomProductStatistics() {
  return (
    <div className="CustomProductStatistics" id="custom-product-statistics">
      <div className="CustomProductStatistics-background">
        <div className="CustomProductStatistics-text-title">
          <p>Custom Product Statistics</p>
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
            <ul>
              <li>100.000 containers exported per year</li>
              <li>100 countries in the world</li>
              <li>Billions of USD in FOB terms</li>
              <li>Importers and Exporters identified</li>
            </ul>
          </div>
        </div>
        <div className="CustomProductStatistics-row-container">
          <div className="CustomProductStatistics-text-content">
            <ul>
              <li>100.000 containers exported per year</li>
              <li>100 countries in the world</li>
              <li>Billions of USD in FOB terms</li>
              <li>Importers and Exporters identified</li>
            </ul>
          </div>
          <img
            className="CustomProductStatistics-row-image"
            src={statDesktop}
            alt="desktop statistics"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="button">
          Click Here to Receive a Free Sample
        </button>
      </div>
    </div>
  );
}

export default CustomProductStatistics;
