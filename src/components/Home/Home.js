import React, { useState } from "react";
import "./Home.css";
import NavbarMain from "../Navbar/NavbarMain";
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

  function scrollTop() {
    window.scrollTo(0,0);
  }

  return (
    <div className="Home">
      <NavbarMain />
      <WelcomePage />
      <CustomProductStatistics />
      <CommercialInteligence />
      <QcPreDeparture />
      <Footer />
      <div className={`scroll-up ${show}`} onClick={scrollTop}>
        Go to Top
      </div>
    </div>
  );
}

export default Home;
