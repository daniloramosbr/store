/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const ContextJsx = createContext();

export const ContextProvider = ({ children }) => {
  
    const [data, setData] = useState({})
    const [width, setWidth] = useState('0%')
    const [dataPrice, setDataPrice] = useState({})
    const [loading, setLoading] = useState(true)
    const [resApi, setResApi] = useState({});
    const [resPrice, setResprice] = useState(Number)
    const [bkgone, setBkgone] = useState(false)
    const [bkgtwo, setBkgtwo] = useState(false)
    const [bkgtree, setBkgtree] = useState(false)
    const [inputres, setInputres] = useState('')
    const [resfilter, setResfilter] = useState([])
    const [showModal, setShowmodal] = useState(false)
    const [itemCart, setItemCart] = useState([])
    const [resModal, setResModal] = useState({})
    const [modal, setModal] = useState(false)
    const [showCart, setShowCart] = useState(true)
    const [showdelete, setShowdelete] = useState(false)
    const [load, setLoad] = useState(false)
    const [theme, setTheme] = useState(false)


    const ScrollPer = () => {
      const element = document.getElementById('toper');
      element.scrollIntoView({ behavior: 'smooth' });
     setWidth('0%')
    };
    const ScrollHard = () => {
      
      setTimeout(() => {
        const element = document.getElementById('tohard');
      element.scrollIntoView({ behavior: 'smooth' });
      setWidth('0%')
      }, 100);
      
      
    };

  return <ContextJsx.Provider value={{data, theme, setTheme, showdelete, load, setLoad, setShowdelete, setResModal, modal, setModal, resModal, itemCart, setItemCart, setData, ScrollHard, ScrollPer, width, setWidth, dataPrice, setDataPrice, loading, setLoading, resApi, setResApi, resPrice, setResprice, bkgone, setBkgone, bkgtwo, setBkgtwo,bkgtree, setBkgtree, inputres, setInputres, resfilter, setResfilter, showModal, setShowmodal, showCart, setShowCart }}>{children}</ContextJsx.Provider>;
};
