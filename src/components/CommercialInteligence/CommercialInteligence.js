import React from "react";
import "./CommercialInteligence.css";
import statMobile from "../../assets/images/commercial-inteligence-01-medium.jpg";
import statDesktop from "../../assets/images/commercial-inteligence-02-medium.jpg";
import Formular from "../Formular/Formular";

function CommercialInteligence() {
  return (
    <div className="CommercialInteligence" id="commercial-inteligence">
      <div className="CommercialInteligence-background">
        <div className="CommercialInteligence-text-title">
          <p>Commercial Intelligence</p>
          <hr />
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
            <div>
              More in depth report informing about market decisions at origin in
              response to information of supply & demand dynamics at
              destinations markets worldwide
            </div>
          </div>
        </div>
        <div className="CommercialInteligence-row-container">
          <div className="CommercialInteligence-text-content">
            <div>
              These reports have Key information to anticipate potential supply
              gaps or oversupply at destination markets
            </div>
          </div>
          <img
            className="CommercialInteligence-row-image"
            src={statDesktop}
            alt="desktop statistics"
          />
        </div>
      </div>
      <Formular />
    </div>
  );
}

export default CommercialInteligence;
