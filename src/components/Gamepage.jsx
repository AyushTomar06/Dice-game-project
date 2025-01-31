import React from 'react'
import styles from "./Gamepage.module.css"
import dicimg from "/dices 1.png"
import Showrules from './Showrules'

function Gamepage({changepage}) {
  return (
    <div className={styles.main}>
        <img src={dicimg} alt="" />
        <div className={styles.text}>
           DICE GAME

           <button onClick={changepage}>
            Play Now
           </button>

        </div>
        
        

    </div>
  )
}

export default Gamepage