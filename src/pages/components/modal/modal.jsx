/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import "./modal.css";
import { ContextJsx } from "../context/Context";
export default function Modal() {
  const {resModal} = useContext(ContextJsx)
  const {showdelete} = useContext(ContextJsx)

  return (
    <div className="container-modal">
      <div className="modal-cart">
        <h3 className="title-cart">
          {!showdelete && (
            <div>PRODUTO ADICIONADO:</div>
          )}
          {showdelete && (
            <div>PRODUTO REMOVIDO:</div>
          )}
          </h3>
        <div className="item">
          {!showdelete && ( resModal.title)}
          {showdelete && ( resModal.item.title)}
        </div>
      </div>
    </div>
  );
}
