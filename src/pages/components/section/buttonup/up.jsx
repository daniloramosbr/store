import { useContext } from "react"
import { ContextJsx } from "../../context/Context"

export default function Up() {

  const { ScrollPer } = useContext(ContextJsx)

  return (
    <div className="cont-up" onClick={ScrollPer} id="up">
      <button><ion-icon name="chevron-up-circle"></ion-icon></button>
    </div>
  )
}
