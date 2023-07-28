/* eslint-disable no-unused-vars */
import "./header.css";
import Menu from "./menu/menu";
import { Link } from "react-router-dom";
import Modalsearch from "./modalSearch/modalsearch";
import { useContext} from "react";
import { ContextJsx } from "../context/Context";

export default function Header() {
  const {setBkgone, setBkgtwo, setBkgtree, theme, setTheme} = useContext(ContextJsx)

  function TogleTheme() {
  setTheme(theme === false ? true : false)
  }
  
    function scroll () {
      window.scrollTo(0, 0);
      setBkgone(false)
      setBkgtwo(false)
      setBkgtree(false)
    }

  return (
    <div className="container-header" >
       
      <div className="header-logo" >
      <div className="header-menu">
          <Menu />
        </div>
        <Link to={'/store/'} className="logo" onClick={scroll}>
        
          <h1 className="namelogo
          ">STORE</h1>
        </Link>
      </div>
      <div className="search-div">
       <Modalsearch/>
      </div>
      <div className="header-theme">
        <button className="moon-style" onClick={()=>{
          TogleTheme()
        }}>
          <ion-icon name="moon"></ion-icon>
        </button>
        <Link to={'/carrinho'}>
        <button className="button-cart-style">
          <ion-icon name="cart-outline"></ion-icon>
        </button>
        </Link>
      </div>
    </div>
  );
}
