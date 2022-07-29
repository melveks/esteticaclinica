import React from "react";
import "./Equip.css";
import about from "../assets/000_3896 _.jpg";
import { Col, Row } from "antd";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function Equip() {
  return (
    <div>
      <NavBar />
      <div className="about">
        <h3 className="about__me">Sobre mim</h3>
        <p className="about__text">
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
        <div>
          <Row>
            <Col className="about__column" span={12}>
              <h3 className="about__me">Formação técnica</h3>
              <p className="about__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
            <Col span={12}>
              <img className="about__image" src={about} alt="about" />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Equip;
