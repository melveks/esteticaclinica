import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram}from 'react-icons/bs';
import './Footer.css';

function Footer() {
    return (
      <div className="footer" >
           <h3> Marque a sua consulta de aconselhamento</h3> 
           <h3> Ligue para: 934318862</h3>
           <div className="footer__social">
            <ul >
                <li> 
                    <BsFacebook/>
                </li>
                <li> 
                    <BsInstagram/>
                </li>
                
                </ul> 
           </div>
           
           
      </div>
    );
  }
  
  export default Footer;