import React from "react";
import { Link } from "react-router-dom";

import "./menuEstetica.css";

function MenuEstetica() {
  return (
    <div className="menuburger">
      <ul className="list_estetica">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/Equip">Equipe</Link>
        </li>
        <li className="item">
          <Link to="/mission">Missão</Link>
        </li>
        <li className="item">
          <Link to="/services">Serviços</Link>
        </li>
        <li className="item">
          <Link to="/products">Produtos</Link>
        </li>
        <li className="item">
          <Link to="/contacts">Contatos</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuEstetica;
