import React from "react";
import "./Body.css";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/Footer";

function Body() {
 

  return (
    <div className="body">
       
      <Carousel/>
      <div className="body__area">
        <h3 className="text"> Skin care</h3>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Body;
