import React from "react";
import "./CommercialInteligence.css";
import statMobile from "../../assets/images/statistics-mobile03-small.jpg";
import statDesktop from "../../assets/images/statistics-pc03-small.jpg";

function CommercialInteligence() {
  return (
    <div className="CommercialInteligence" id="commercial-inteligence">
      <div className="CommercialInteligence-background">
        <div className="CommercialInteligence-text-title">
          <p>Commercial Inteligence</p>
        </div>
      </div>
      <div className="CommercialInteligence-col">
        <div className="CommercialInteligence-row-container">
          <img
            className="CommercialInteligence-row-image"
            src={statMobile}
            alt="mobile statistics"
          />
          <div className="CommercialInteligence-text-content">
            <ul>
              <li>100.000 containers exported per year</li>
              <li>100 countries in the world</li>
              <li>Billions of USD in FOB terms</li>
              <li>Importers and Exporters identified</li>
            </ul>
          </div>
        </div>
        <div className="CommercialInteligence-row-container">
          <div className="CommercialInteligence-text-content">
            <ul>
              <li>100.000 containers exported per year</li>
              <li>100 countries in the world</li>
              <li>Billions of USD in FOB terms</li>
              <li>Importers and Exporters identified</li>
            </ul>
          </div>
          <img
            className="CommercialInteligence-row-image"
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

export default CommercialInteligence;
