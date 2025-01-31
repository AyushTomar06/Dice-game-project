
import {  useState} from "react"

import './App.css'
import Gamepage from './components/Gamepage'
import Gameinstructionpage from './components/Gameinstructionpage'

function App() {
 const[gamestart,setgamestart]=useState(true);
 function changepage() {
  gamestart==true ? setgamestart(false) : setgamestart(true)
  
 }
  return (
    <>
    
    {
      gamestart==true ? <Gamepage changepage={changepage}/> : <Gameinstructionpage/>
    }


    
    </>
  )
}

export default App
