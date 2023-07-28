/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './filterprice.css'
import Header from '../components/header/header'
import Sectionsone from '../components/section/sectionone/sectionone'
import { useContext, useEffect } from 'react'
import { ContextJsx } from '../components/context/Context'
import Price from '../components/section/buttonprice/price'

export default function FilterPrice() {
  const {dataPrice, setShowmodal} = useContext(ContextJsx)

  useEffect(()=>{
    function scroll () {
      window.scrollTo(0,0);
      setShowmodal(false)
    }
    scroll()
  },[])

  return (
    <div className='price-li'>
 <div className='price-cont'>
      <div>
      <Header/>
      </div>
      <Price/>
      <h2 className='categ'> 
        PRODUTOS
      </h2>
      <section >
      { dataPrice.map((item)=>{
      return <Sectionsone key={item.id} img={item.img} title={item.title} price={item.price}  />
      })}
      </section>
    </div>



    </div>
   
  )
}
