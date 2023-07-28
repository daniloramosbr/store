/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Sectionsone from "./sectionone/sectionone";
import "./section.css";
import { useContext, useEffect, useState } from "react";
import Price from "./buttonprice/price";
import Up from "./buttonup/up";
import axios from "axios";
import Loading from "../loading/loading";
import { ContextJsx } from "../context/Context";

export default function Section() {
  const {resApi, setResApi} = useContext(ContextJsx)
  const {loading, setLoading, setShowmodal} = useContext(ContextJsx)
 
    useEffect(() => {
    async function run() {
      window.scrollTo(0, 0);
      setShowmodal(false)
      try {
        const res = await axios.get('http://localhost:580/apidaniloramos');
        setLoading(false)
        setResApi(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
   run()
  }, []);

  return (
    <div className="section-cont" id="toper">
     {!loading && (
       <h2 className="categ">PERIFÉRICOS:</h2>
     )}
      <section>
        <Price />
        {loading && (
        <Loading/>
        )}
        {!loading && (
        resApi.prods[0].map((item) => {
          return (
            <Sectionsone
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          );
        })
        )}
      </section>
     {!loading && (
       <h2 className="categ" id="tohard">
       HARDWARE:
     </h2>
     )}
      <section>
      {!loading && (
        resApi.prods[1].map((item) => {
          return (
            <Sectionsone
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          );
        })
        )}
      </section>
      <Up />
    </div>
  );
  
}
