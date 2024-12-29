"use client"

import image1 from '../Image/slider-4.webp';
import image2 from '../Image/slider-1.webp';
import image3 from '../Image/slider-2.webp';
import image4 from '../Image/slider-3.webp';
import { Carousel } from "flowbite-react";

function Section61() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-960 w-300">
        <h1>Section61</h1>
      <Carousel >
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
        <img src={image3} alt="..." />
        <img src={image4} alt="..." />

      </Carousel>
    </div>
  );
}


export default Section61;