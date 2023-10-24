import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import Homesectioncard from "../../Components/Homesectioncard/Homesectioncard";

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div>
        <Homesectioncard />
      </div>
    </div>
  );
};

export default Homepage;
