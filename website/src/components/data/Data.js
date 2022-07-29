import React from "react";
import "./Data.css";





function Data(props) {
  return (
    <div className="data">
      
     <table className ="data__table">
        <tr>
          <td>Nome</td>
          <td>{props.nome}</td>
        </tr>
        <tr>
          <td>Telefone</td>
          <td>{props.telefone}</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>{props.email}</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td>{props.instagram}</td>
        </tr>
        <tr>
          <td>Facebook</td>
          <td>{props.facebook}</td>
        </tr>
      </table>
    </div>
  );
}
export default Data;
