import React from "react";
import "./CommercialInteligence.css";
// import { Link } from "react-router-dom";

function CommercialInteligence() {
  return (
    <div className="CommercialInteligence">
      {/* <div className="CommercialInteligence-back-button">
        <Link className="btn btn-success" to="/home">
          Go Back
        </Link>
      </div> */}
      <h2 className="CommercialInteligence-title">
        Detailed Commercial Intelligence per Product
      </h2>
      <ul className="CommercialInteligence-content">
        <li>
          More in depth report informing about market decisions at origin in
          response to information of supply & demand dynamics at destinations
          markets worldwide{" "}
        </li>
        <li>
          These reports have Key information to anticipate potential supply gaps
          or oversupply at destination markets
        </li>
        <li>Asparagus, Avocado, Blueberries and Mango </li>
      </ul>
      <p className="CommercialInteligenceList-articles-source">
        Origin information from Peru on Grapes, Avocados, Blueberries, Mango,
        Bananas, Mandarins, Asparagus and Pomegranates
      </p>
    </div>
  );
}

export default CommercialInteligence;
