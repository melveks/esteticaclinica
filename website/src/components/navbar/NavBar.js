import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import  './NavBar.css'
import Container from '../container/Container.js'
import { BiMenu } from 'react-icons/bi';






function NavBar() {




    return (
      <div className="menu">
       
        <nav className="header">
        
        <Container>
        <ul className="list" >
            <li>
            <Link to="/home"></Link>
            <img src = {logo} className = "logo"alt="logo" />
            </li>
            <li className="item">
                <Link to="/ ">Home</Link>
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
        <div className="nav_icons " >
        <Link to="/menuEstetica"><BiMenu size={50}  /></Link>
        </div>
         
    </Container>
        
    </nav>
        </div>
    );
  }
  export default NavBar;