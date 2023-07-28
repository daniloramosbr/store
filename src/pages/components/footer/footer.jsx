import { useContext } from 'react'
import './footer.css'
import { ContextJsx } from '../context/Context'
export default function Footer() {

  const {loading} = useContext(ContextJsx)

  return (
    <div>
      {!loading && ( 
         <div className='cont-ofc'>
        <div className="cont-foot">
       <div className="atend">
       <h1>
       ATENDIMENTO
       </h1>
     <span>Central de Ajuda</span>
     <span>Como Comprar</span>
     <span>Garantia</span>
     <span>Devolução </span>
     <span>Fale Conosco</span>
       </div>
       <div className="sobre">
       <h1>
       SOBRE NÓS
       </h1>
     <span>Sobre Nós</span>
     <span>Políticas </span>
     <span>Política de Privacidade</span>
     <span>Ofertas Relâmpago</span>
     <span>Blog</span>
       </div>
       <div className="follow">
       <h1>
       SIGA-NOS
       </h1>
     <span><ion-icon name="logo-instagram"></ion-icon> Instagram</span>
     <span><ion-icon name="logo-tiktok"></ion-icon> TikTok</span>
     <span><ion-icon name="logo-twitter"></ion-icon> Twitter</span>
     <span><ion-icon name="logo-linkedin"></ion-icon> Linkedin</span>
       </div>
     </div >
   
     <div className="dev">
         desenvolvido por &copy;Danilo Ramos
       </div>
     </div>
      )}
    </div>
   
  )
}
