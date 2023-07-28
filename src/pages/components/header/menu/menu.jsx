import { useContext } from 'react'
import './menu.css'
import { ContextJsx } from '../../context/Context'
import { Link } from 'react-router-dom'


export default function Menu() {
  
  const { width, setWidth } = useContext(ContextJsx)
  const { ScrollHard } = useContext(ContextJsx)
  const { ScrollPer } = useContext(ContextJsx)

  return (
    <div className="container-menu">

      <div className="nav" style={{width: width}}>
      <button onClick={()=>{
        setWidth('0%')
      }} className='xbutton'><ion-icon name="arrow-undo-outline"></ion-icon>
      </button>
      <div className='categ-title'>
        CATEGORIAS:
      </div>
     <Link to={'/store'} className='link-button'>
     <button className='buttp' onClick={ScrollPer}>PERIFÉRICOS</button>
      <button className='butth' onClick={ScrollHard}>HARDWARE</button>
      </Link>
     
   
      </div>
     

      <div className="butt" onClick={()=>{
        setWidth('100%')
       
      }}>
        <button><ion-icon name="menu"></ion-icon></button>
      </div>
    </div>
  )
}
