import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = HomeCarouselData.map((item) => (
    <img className="cursor-pointer" src={item.image} alt="image1" />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
