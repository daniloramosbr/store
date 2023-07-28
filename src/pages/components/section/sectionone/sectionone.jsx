/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextJsx } from "../../context/Context";

export default function Sectionsone({ img, title, price}) {
 
 const {setData, resApi} = useContext(ContextJsx)

 const priceInt = Number(price)

 const format = priceInt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'  });
 
  function RunInfo () {
  setData(resApi.prodsall.filter(function(item){
    return item.img == img
  }))
 
  }
  return (
    <Link to={'/produto'} onClick={RunInfo} className="one-container">
      <img src={img} />
      <b>{title}</b>
      <div > {format}</div>
     </Link>
  );
}





