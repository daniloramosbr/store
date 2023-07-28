/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ContextJsx } from "../../context/Context"

export default function Price() {
  const {resApi,setDataPrice,  bkgone, setBkgone, bkgtwo, setBkgtwo, bkgtree, setBkgtree} = useContext(ContextJsx)

    function SendPrice(minprice,maxprice) {
      setDataPrice(resApi.prodsall.filter(function(item){      
        return item.price > minprice && item.price < maxprice
      }))
    }
  return (
    
       <div className='button-price'>
        <h3 className="title-price">PREÇOS:</h3>
        <Link to={'/price'} onClick={()=>{
          SendPrice(100,1000)
          setBkgone(true)
          setBkgtwo(false)
          setBkgtree(false)
        
        }}>
        <button className={bkgone ? 'night' : ''}>DE R$100 A R$1.000</button>
        </Link>
        <Link to={'/price'} onClick={()=>{
          SendPrice(1000,2000)
         setBkgtwo(true)
         setBkgtree(false)
         setBkgone(false)
        }}>
        <button className={bkgtwo ? 'night' : ''}>DE R$1.000 A R$2.000</button>
        </Link>
        <Link to={'/price'}  onClick={()=>{
          SendPrice(2000,3000)
          setBkgtree(true)
          setBkgone(false)
          setBkgtwo(false)
        }}>
        <button className={bkgtree ? 'night' : ''}>DE R$2.000 A R$3.000</button>
        </Link>
      </div>
  )
}