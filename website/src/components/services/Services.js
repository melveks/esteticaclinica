import React from "react";
import "./Services.css";
import pele1 from "../assets/pexels-gustavo-fring-3985331.jpg";
import pele2 from "../assets/pexels-andrea-piacquadio-3764013.jpg";
import pele3 from "../assets/pexels-shiny-diamond-3762633.jpg";
import pele4 from "../assets/pexels-yan-krukov-7011209.jpg";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function Services() {
  return (
    <div>
      <NavBar />
      <div className="services">
        <h3 className="services__title">Serviços</h3>
        <ul className="services__column">
          <li>
            <img className="services__image" src={pele1} alt="pele1"></img>
            <p className="services__text"> Tratamentos faciais</p>
          </li>
          <li>
            <img className="services__image" src={pele2} alt="pele2"></img>
            <p className="services__text"> Tratamentos corporais</p>
          </li>
          <li>
            <img className="services__image" src={pele3} alt="pele3"></img>
            <p className="services__text"> Massagens </p>
          </li>
          <li>
            <img className="services__image" src={pele4} alt="pele4"></img>
            <p className="services__text"> Depilação á laser</p>
          </li>
          <li>
            <img className="services__image" src={pele1} alt="pele1"></img>
            <p className="services__text"> Manicure</p>
          </li>
          <li>
            <img className="services__image" src={pele2} alt="pele2"></img>
            <p className="services__text"> Pedicure</p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
