/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react"
import ModalInput from "./modalinput"
import { ContextJsx } from "../../context/Context"
import { Link } from "react-router-dom"

export default function Modalsearch() {
const {loading, resApi} = useContext(ContextJsx)
const {inputres, setInputres} = useContext(ContextJsx)
const {resfilter, setResfilter} = useContext(ContextJsx)
const {showModal, setShowmodal} = useContext(ContextJsx)
const input = document.getElementById('input')

  useEffect(()=>{
    const filterUpper = inputres.toUpperCase()

    !loading && (
      setResfilter(resApi.prodsall.filter(function(item){
        return item.title.toUpperCase().indexOf(filterUpper) != -1
       }))
    )

  if (resfilter.length === 0) {

  setShowmodal(false)
  } 
  if (resfilter.length >= 1){

  setShowmodal(true)
  }
  if (inputres == 0) {
   setResfilter([])
   setShowmodal(false)
  }
  },[inputres])


  return (
    <div className="header-search">
        <div className="search-input">
        <input id="input" onChange={(e)=>{
          setInputres(e.target.value)
          setShowmodal(false)
        }} type="search" placeholder="buscar produto" />
        <div className="butt-pesq">
          <Link to={'/search'}>
          <button id="butt-s"><ion-icon name="search-outline"></ion-icon></button>  
          </Link>
        </div>
        </div>
      {showModal &&  
      <div className="modal" id="modal">
        {(resfilter.map((item) => {
          return (
            <ModalInput
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              exitModal = {function (){
                input.value = ''
                setShowmodal(false)
              }}
            />
          );
        }))}
       </div>}
    </div>
  )
}
