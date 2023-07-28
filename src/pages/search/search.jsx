/* eslint-disable no-unused-vars */
import Header from "../components/header/header"
import Sectionsone from "../components/section/sectionone/sectionone"
import { useContext, useEffect, useState } from "react"
import { ContextJsx } from "../components/context/Context"
import './search.css'
import { Link } from "react-router-dom"

export default function Search() {
  const {inputres, resfilter, setShowmodal } = useContext(ContextJsx)
  const [showFind, setShowfind] = useState(true)
  useEffect(()=> {
    function gofect () {
      setShowmodal(false)
    }
    if (resfilter.length == 0 ) {
      setShowfind(false)
      }
    gofect()
  },[])


  return (
    <div className="search">
    <div>
    <Header/>
    </div>
    {showFind && (
    <h2 className="categ"> 
      BUSCAR POR {inputres} 
    </h2> )}
    {!showFind && (
      <h2 className="error"> 
      PRODUTO NÃO ENCONTRADO.
      <div>BUSCA FEITA POR {inputres}</div>
     <Link to={'/store'}>
     CLIQUE AQUI PARA VOLTAR</Link>
    </h2>
    )}
    <section >
    { resfilter.map((item)=>{
    return <Sectionsone key={1} img={item.img} title={item.title} price={item.price}  />
    })}
    </section>
  </div>
  )
}
