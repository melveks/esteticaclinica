import React from "react";
import "./Products.css";
import bioage from "../assets/bioage-logo.png";
import SliderData from "../sliderdata/SliderData";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function Products() {
  return (
    <div>
      <NavBar />
      <div className="products">
        <h3 className="products__title">Produtos</h3>
        <p className="products__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img src={bioage} className="products__image" alt="bioage"></img>
        <SliderData />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
