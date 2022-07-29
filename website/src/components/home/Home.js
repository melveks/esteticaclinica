import React from "react";
import Body from "../body/Body";
import NavBar from "../navbar/NavBar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <NavBar className="navbar" />
      <Body />
    </div>
  );
}

export default Home;
