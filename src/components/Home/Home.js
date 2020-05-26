import React, { useState } from "react";
import "./Home.css";
import WelcomePage from "../WelcomePage/WelcomePage";
import CustomProductStatistics from "../CustomProductStatistics/CustomProductStatistics";
import CommercialInteligence from "../CommercialInteligence/CommercialInteligence";
import QcPreDeparture from "../QcPreDeparture/QcPreDeparture";
import Footer from "../Footer/Footer";

function Home() {
  const [show, setShow] = useState("");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setShow("show");
    } else {
      setShow("");
    }
  }

  return (
    <div className="Home">
      <WelcomePage />
      <CustomProductStatistics />
      <CommercialInteligence />
      <QcPreDeparture />
      <Footer />
      <a className={`scroll-up ${show}`} href="/home#welcome-page">
        Go to Top
      </a>
    </div>
  );
}

export default Home;
