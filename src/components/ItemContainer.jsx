import React from "react";
import { ListNewClients } from "./ListNewClients";
import './style.css';



export const ItemContainer = ({ brand }) => {
  return (
    <div>
        <h1>Alta de clientes</h1>
      <div className="row">
        <div className="col-lg-8">
        <ListNewClients />
            
        </div>
        <div className="col-lg-4">
        <h2>Formulario</h2>
        </div>
      </div>
    </div>
  );
};
