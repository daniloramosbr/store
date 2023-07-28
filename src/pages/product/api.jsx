/* eslint-disable no-unused-vars */

import axios from "axios"
import { useState } from "react"
export default function Api() {
const [load, setLoad] = useState(false)
const [loadres, setLoadres] = useState(false)
const [dataInput, setDatainput] = useState(Number)
const [data, setData] = useState({})
const [error,setError] = useState(false)

  async function getData () {
    setError(false)
    setLoad(true)
   try {
    const res = await axios.get(`//www.cepcerto.com/ws/json-frete/01001000/${dataInput}/500`)
    setData(res.data)
    setLoad(false)
    setLoadres(true)
    if (res.data.valorpac == "0,00") {
     setError(true)
     setLoadres(false)
     }
   } catch (error) {
    console.log(error.message)
   }

 
  }


  return (
    <div className="cont-fret">
     <div className="title">
      CALCULE SEU FRETE:
     </div>
    <div>
      <input placeholder="digite aqui seu cep" type="number" id="input-fret" onChange={(e)=>{
        setDatainput(e.target.value)
      }} />
    </div>
    <div>
     <button id="button-calc" onClick={getData
    }>CALCULAR</button>
    </div>
    {error && (
      <div className="div-cep">CEP NÃO ENCONTRADO.</div>
    )}
    {load && (
     <div className="div-busc">BUSCANDO...</div>
    )}
    {loadres && (
      <div className="res">
      <div>
        CEP DE DESTINO: 
        {data.cepdestino}
      </div>
 
      <div>
        Valor Pac: R$ {data.valorpac} 
      </div>
      <div>
        Prazo Pac: {data.prazopac} dias
      </div>
   
      <div>
        Prazo Sedex: {data.prazosedex} dias
      </div>
      <div>
        Valor Sedex: R$ {data.valorsedex}
      </div>
  
    </div>
    )}
    </div>
  )
}
