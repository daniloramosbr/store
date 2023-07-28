/* eslint-disable no-unused-vars */
import "./product.css";
import Header from "../components/header/header";
import { ContextJsx } from "../components/context/Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import Api from "./api";
import { SaveLink } from "../services/storage";

export default function Product() {
  const { data, setShowmodal, setShowdelete } = useContext(ContextJsx);
  const {setResModal} = useContext(ContextJsx)
  const{setModal} = useContext(ContextJsx)

  const priceInt = Number(data[0].price)

  const format = priceInt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'  });

  function RunSetItem () {
    setModal(true)
    setShowdelete(false)
    setTimeout(() => {
    setModal(false)
    setShowdelete(false)

    }, 2000);
      SaveLink('@DanDev', data[0])
      setResModal(data[0])
     
  } 
  
  useEffect(()=>{
    function scroll () {
      window.scrollTo(0, 0);
      setShowmodal(false)
    }
    scroll()
  },[])
  return (
    <div className="cont-prod">
      <div className="">
        <Header />
      </div>
      {data && (
         <div className="product">
         <nav className="nav-cont">
         <div className="imgg">
         <img src={data[0].img} />
         </div>
         <div className="cont-info">
         <b id="title-prod">{data[0].title}</b>
         <b id="prod-d">PRODUTO DISPONIVEL</b>
         <div className="price-info">{format}</div>
         <Link to={'/carrinho'} onClick={RunSetItem}>
         <button className="button-comp">
           <b id='b-cont'>
             COMPRAR
           </b>
           <div className="div-cont">ADICIONAR AO CARRINHO</div>
         </button>
         </Link>
         <hr />
         <Api/>
         </div>
         </nav>
         <div>
          <h2 className="desc">
            DESCRIÇÃO DO PRODUTO:
          </h2>
         </div>
         <div className="desc" id="desc-ofc">
          {data[0].description}
         </div>

        
       </div>
      )}
     <Footer/>
      </div>
  );
}
