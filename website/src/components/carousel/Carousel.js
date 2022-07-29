import React from 'react';
import './Carousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pele1 from "../assets/pexels-gustavo-fring-3985331.jpg"
import pele2 from "../assets/pexels-andrea-piacquadio-3764013.jpg"
import pele3 from "../assets/pexels-shiny-diamond-3762633.jpg"
import pele4 from "../assets/pexels-yan-krukov-7011209.jpg"




const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className="images"src={pele1} onDragStart={handleDragStart} role="presentation" alt="pele1" />,
  <img  className="images"src={pele2} onDragStart={handleDragStart} role="presentation" alt="pele2"/>,
  <img  className="images"src={pele3} onDragStart={handleDragStart} role="presentation"alt="pele3" />,
  <img  className="images"src={pele4} onDragStart={handleDragStart} role="presentation"alt="pele4" />,
];

function Carousel() {
    return (
      <div className="carousel_images">
          <AliceCarousel className="carousel" mouseTracking items={items} autoPlay />

      </div>
      
        );
      }
      
  
  export default Carousel;