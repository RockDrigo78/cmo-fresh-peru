import React from "react";
import "./QcPreDeparture.css";
// import { Link } from "react-router-dom";

function QcPreDeparture() {
  return (
    <div className="QcPreDeparture">
      {/* <div className="QcPreDeparture-back-button">
        <Link className="btn btn-success" to="/home">
          Go Back
        </Link>
      </div> */}
      <h2 className="QcPreDeparture-title">QC Pre-Departure</h2>
      <ul className="QcPreDeparture-content">
        <li>
          Few importers use or track departures in origin. Generally importers
          make reports upon arrival when it is too late for servicing customers.
        </li>
        <li>
          Ripeness, maturity average information, among other traits can help
          manage expectations of arrivals and avoid bad surprises.{" "}
        </li>
      </ul>
      <p className="QcPreDepartureList-articles-source">
        Origin information from Peru on Grapes, Avocados, Blueberries, Mango,
        Bananas, Mandarins, Asparagus and Pomegranates
      </p>
    </div>
  );
}

export default QcPreDeparture;
