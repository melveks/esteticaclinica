import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equip from "./components/Equip/Equip";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Contacts from "./components/contacts/Contacts";
import Container from "./components/container/Container";
import Home from "./components/home/Home";
import Mission from "./components/mission/Mission";
import {useEffect} from 'react'
import MenuEstetica from "./components/menuEstetica/MenuEstetica";
import "./App.css"





function App() {
  useEffect(() => {
    document.title = "estetica"
  }, []);
  
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Equip" element={<Equip />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/menuEstetica" element={<MenuEstetica />} />

          </Routes>
        </Container>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
