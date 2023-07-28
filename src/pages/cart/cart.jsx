/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import Header from '../components/header/header'
import { ContextJsx } from '../components/context/Context'
import Cartitem from './cartitem'
import Modal from '../components/modal/modal'
import { GetLink } from '../services/storage'
import Loading from '../components/loading/loading'

export default function Cart() {
  const{modal} = useContext(ContextJsx)
  const [showCart, setShowCart] = useState(true)
  const {itemCart, setItemCart,} = useContext(ContextJsx)
  const [loadCart, setLoadCart] = useState(true)
  const [restotal, setRestotal] = useState(Number)

   setTimeout(() => {
   
    async function effect() {
     
      const result = await GetLink('@DanDev')
      setItemCart(result)
     setLoadCart(false)
     if (result.length === 0) {
      setShowCart(false)
      } 

      let res = 0

      for (let c = 0 ; c < result.length ; c++) {

        if (result[c].amount > 1) {
        let value = result[c].amount
         let resamount = result[c].price
         let equal = resamount * value
         res += equal
        }
        if (result[c].amount < 2) {
        res += Number(result[c].price)
        }
      }

      const format = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'  });
      setRestotal(format)
  
 
    }
    effect()
   },300);
  
   
  return (
    <div className='cont-cart'>
      <div className='div-abs'>
      <Header/>
      </div>
      
       {loadCart && (
        <Loading/>
       )}
      
      <div> {!loadCart && ( <nav className='nav-cart'>
      <div className="header-cart">
    <div className='ion'>
      <ion-icon name="cart-outline"></ion-icon>
    </div>
    <h1>
    CARRINHO DE COMPRAS
    </h1>
  </div>


  {showCart && (
    <div className="section-cart">
    <div>
      PRODUTO:
    </div>
    <div>
      PREÇO:
    </div>
    <div>
      QUANTIDADE:
    </div>
  </div>
  )}
 {showCart && (
   <div key={0}>
   {itemCart.map((item)=>(
    <div key={item.img}>
       <Cartitem item={item}  key={item.id} img={item.img} title={item.title} price={item.price} setcart={()=>{
        setShowCart(false)
       }}  description={item.description} amount={item.amount} id={item.id}/>
    </div>
   ))}
   </div>
 )}
 {showCart && ( <div className="total">
    <h2>
      PREÇO TOTAL:
    </h2>
  <div>
  {restotal}
  </div>
  </div>)}
  {!showCart && (
    <div>SEU CARRINHO ESTÁ VAZIO :/</div>
  )}
      </nav>)
      
      }</div>

      {modal && (
     <Modal/>
   )}
    </div>
  )
}
