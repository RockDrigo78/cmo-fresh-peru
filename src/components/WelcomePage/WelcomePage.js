import React from "react";
import "./WelcomePage.css";
import Carousel from "../Carousel/Carousel";

function WelcomePage() {
  return (
    <div className="WelcomePage" id="welcome-page">
      <Carousel />
      <div className="WelcomePage-content">
        <p className="title">Welcome to CMO Fresh</p>
        <p className="subtitle">CMO stands for Chief Marketing Officer.</p>
        <p className="text column-1">
          As marketing experts we believe in sound decision making. To
          complement your working knowledge, we use relevant data organized
          methodically to outline consistently the market landscape.
        </p>
        <p className="text column-2">
          CMO Fresh dissects departure customs data from origin to highlight
          trends in supply and demand at destination markets. Either by
          anticipating a supply gap or by generating promotions, CMO Fresh will
          help you improve your response to your customer needs.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <button className="button">Click Here to Receive a Free Sample</button>
      </div>
    </div>
  );
}

export default WelcomePage;
