import pele1 from "../assets/pexels-gustavo-fring-3985331.jpg";
import pele2 from "../assets/pexels-andrea-piacquadio-3764013.jpg";
import pele3 from "../assets/pexels-shiny-diamond-3762633.jpg";
import React from "react";
import "./SliderData.css";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function SliderData() {
  const images = [pele1, pele2, pele3];
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleRight className="slidebutton1" onClick={nextSlide} />
      <FaArrowAltCircleLeft className="slidebutton2" onClick={prevSlide} />
      {images.map((image, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="slideImages" src={image} alt="imagens_estetica" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SliderData;
