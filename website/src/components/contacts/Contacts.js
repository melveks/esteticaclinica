import React from "react";
import Formulary from "../Formulary";
import Data from "../data/Data.js";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Contacts.css";

function Contacts() {
  const name = "Melina Medeiros";
  const celphone = "934318862";
  const email = "melveks@gmail.com";
  const instagr = "https://www.instagram.com/melinaesteticista/";
  const face = "https://www.facebook.com/melinamedeirosesteticista";
  return (
    <div>
      <NavBar />
      <div className="contacts">
        <div>
          <Data
            nome={name}
            email={email}
            telefone={celphone}
            instagram={instagr}
            facebook={face}
          />
          <Formulary />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contacts;
