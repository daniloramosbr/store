/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import './App.css'
import RoutesApp from './routes.jsx'
import { ContextJsx } from './pages/components/context/Context'


function App () {
const {theme} = useContext(ContextJsx)
    return (
    <div className={theme === true ? 'dark' : ''}>
    <RoutesApp/>
    </div>
    )
}
export default App