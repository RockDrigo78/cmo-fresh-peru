import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import NewsList from "../NewsList/NewsList";

function Home(props) {
  return (
    <div className="Home">
      <Carousel />
      <NewsList items={props.items} isLoaded={props.isLoaded} />
    </div>
  );
}

export default Home;
