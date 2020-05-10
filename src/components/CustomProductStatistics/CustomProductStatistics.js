import React from "react";
import "./CustomProductStatistics.css";
// import { Link } from "react-router-dom";

function CustomProductStatistics() {
  return (
    <div className="CustomProductStatistics">
      {/* <div className="CustomProductStatistics-back-button">
        <Link className="btn btn-success" to="/home">
          Go Back
        </Link>
      </div> */}
      <h2 className="CustomProductStatistics-title">
        Review our proven and tested information layout
      </h2>
      <ul className="CustomProductStatistics-content">
        <li>100.000 containers exported per year</li>
        <li>100 countries in the world</li>
        <li>Billions of USD in FOB terms</li>
        <li>Importers and Exporters identified</li>
      </ul>      
      <p className="CustomProductStatisticsList-articles-source">
        Origin information from Peru on Grapes, Avocados, Blueberries, Mango,
        Bananas, Mandarins, Asparagus and Pomegranates
      </p>
    </div>
  );
}

export default CustomProductStatistics;
