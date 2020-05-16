import React from "react";
import "./Home.css";
import Parallax01 from "../Parallax01/Parallax01";
import Parallax02 from "../Parallax02/Parallax02";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Parallax01 />     
      <Parallax02 />  
      <Parallax01 />     
      <Parallax02 />     
      <Footer />     
    </div>
  );
}

export default Home;
