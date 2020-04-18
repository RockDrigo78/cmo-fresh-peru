import React from "react";
import "./Home.css";
import SimpleSlider from "../Carousel/Carousel";
import CarouselFade from "../CarouselFade/CarouselFade";

function Home() {
  return (
    <div className="Home">
      < SimpleSlider />   
      < CarouselFade />  
    </div>
  );
}

export default Home;
