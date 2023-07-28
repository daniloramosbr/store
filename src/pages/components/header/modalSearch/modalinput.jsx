/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ContextJsx } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function ModalInput({img, title, price, exitModal}) {
  const {setData, resApi} = useContext(ContextJsx)


  const priceInt = Number(price)

  const format = priceInt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'  });

  function RunInfo () {
    exitModal()
    setData(resApi.prodsall.filter(function(item){
      return item.img == img
    }))
    }
  return (
    <Link to={'/produto'} onClick={RunInfo} className="link-modali">
      <div className="modal-search">
        <div>
        <img width={50} src={img} />  
        </div>
        <div>
        <b className="title">{title}</b>
        </div>
        <div className="price-mod">{format}</div>
      </div>
      </Link>
  )
}
