import React from "react";
import "./QcPreDeparture.css";

function QcPreDeparture() {
  return (
    <div className="QcPreDeparture" id="qc-pre-departure">
      <div className="QcPreDeparture-background">
        <div className="QcPreDeparture-text-title">
          <p>Qc Pre Departure</p>
        </div>
      </div>
      <div className="QcPreDeparture-text-content">
        <ul>
          <li>loren ipsum</li>
          <li>loren ipsumm 023</li>
          <li>Billions of USD in FOB terms</li>
          <li>Importers and Exporters identified</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <button className="button">
          Click Here to Receive a Free Sample
        </button>
      </div>
    </div>
  );
}

export default QcPreDeparture;
