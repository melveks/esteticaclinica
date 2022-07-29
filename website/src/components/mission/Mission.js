import React from "react";
import "./Mission.css";
import pele1 from "../assets/pexels-gustavo-fring-3985331.jpg";
import pele2 from "../assets/pexels-andrea-piacquadio-3764013.jpg";
import pele3 from "../assets/pexels-shiny-diamond-3762633.jpg";
import pele4 from "../assets/pexels-yan-krukov-7011209.jpg";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function Mission() {
  return (
    <div className="mission__area">
      <NavBar />
      <div className="mission">
        <h3 className="mission__title">Missão</h3>
        <p className="mission__text">
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
        <div class="container">
          <div class="card">
            <div class="face face--front">
              <img src={pele1} alt="pele1" />
            </div>
            <div class="face face--back">Respeito</div>
          </div>
          <div class="card">
            <div class="face face--front">
              <img src={pele2} alt="pele1" />
            </div>
            <div class="face face--back">Honestidade</div>
          </div>
          <div class="card">
            <div class="face face--front">
              <img src={pele3} alt="pele1" />
            </div>
            <div class="face face--back">Técnica</div>
          </div>
          <div class="card">
            <div class="face face--front">
              <img src={pele4} alt="pele1" />
            </div>
            <div class="face face--back">Simpatia</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Mission;
