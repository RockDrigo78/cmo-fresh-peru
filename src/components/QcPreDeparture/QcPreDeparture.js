import React from "react";
import "./QcPreDeparture.css";
import Formular from "../Formular/Formular";

function QcPreDeparture() {
  return (
    <div className="QcPreDeparture" id="qc-pre-departure">
      <div className="QcPreDeparture-background">
        <div className="QcPreDeparture-text-title">
          <p>Qc Pre Departure</p>
          <hr/>
        </div>
      </div>
      <div className="QcPreDeparture-text-content">
        <ul>
          <li>
            Few importers use or track departures in origin. Generally importers
            make reports upon arrival when it is too late for servicing
            customers.
          </li>
          <li>
            We offer in origin pre-departure inspections and quick reports to
            asses produce before is loaded into a container.
          </li>
          <li>
            Ripeness, maturity average information, among other traits can help
            manage expectations of arrivals and avoid bad surprises.
          </li>
        </ul>
      </div>
      <Formular />
    </div>
  );
}

export default QcPreDeparture;
