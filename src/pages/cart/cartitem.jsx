/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextJsx } from "../components/context/Context";
import { DeleteLinks } from "../services/storage";
import { UpdateLinks } from "../services/storage";

export default function Cartitem({img, title, price, item, description, setcart, amount, id}) {
  const {setData, itemCart, setItemCart, setModal, setResModal,} = useContext(ContextJsx)
  const {setShowdelete} = useContext(ContextJsx)
  const [count, setCount] = useState(amount)
 
  useEffect(()=>{

  function GetNew() {

  UpdateLinks(img, title, price, description, count, id)
    
    }
 GetNew()
  },[count])

  function AddButton() {
    setCount((count) => count + 1)
  }

  function RemButton() {
  if (count === 1 ) {
    return
  }
  setCount((count) => count - 1)
  UpdateLinks(img, title, price, description, count, id)
  }

  async function DelLink(item) {
    
  const result = await DeleteLinks(itemCart, item.item.img)
  setModal(true)
  if (result.length < 1) {
    setcart()
  }

  setItemCart(result)
 
  setResModal(item)
  setShowdelete(true)

  setTimeout(() => {
    setModal(false)
    setShowdelete(false)

  }, 1500);
  }
   
  function RunInfo () {
    setData(itemCart.filter(function(item){
      return item.img == img
    }))
   
    }

  const priceInt = Number(price)

  const format = priceInt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
  return (
    <div className="cont-cart-ofc">
     
        <Link to={'/produto'} onClick={RunInfo} className="cont-title">
        <div className="img-title">
          <img
            width={60}
            src={img}
          />
        <div className="cont-title-cart">
        {title}
          </div> 
        </div>
      </Link>
      <nav className="cont-price">
      <div className="price-cart">{format} </div>
      </nav>
      <nav className="cont-butt">
        <div className="butt-qtd">
          <button onClick={RemButton}>-</button>
          <div className="number-cart">{count}</div>
          <button onClick={AddButton}>+</button>
        </div>
        <div className="trash">
          <button onClick={()=>{
            DelLink({item})
          }}>
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </nav> 
    </div>
  );
}
