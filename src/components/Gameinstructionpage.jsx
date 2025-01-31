import React, { useState } from "react";
import styles from "./Gameinstructionpage.module.css";
import { use } from "react";
import Showrules from "./Showrules";

function Gameinstructionpage() {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  const [selectednumber, setselectednumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [score, setscore] = useState(0);
  const [selecterror, setselecterror] = useState("");
  const [showrules,setshowrules]=useState(false)
  function resetscore() {
    setscore(0);
  }

  function changeselectnuber(e) {
    setselectednumber(e);
    setselecterror("");
  }

  function randomgenerate(min, max) {
    if (selectednumber == undefined) {
      setselecterror("You have not selected any number");
      return;
    }

    let random = Math.floor(Math.random() * (max - min) + min);
    setcurrentdice(random);

    if (selectednumber === random) {
      setscore(score + selectednumber);
    } else {
      setscore(score - 2);
    }

    setselectednumber(undefined);
  }
  // console.log(currentdice)

        console.log(showrules);
  return (
    <>
      <div className={styles.toppart}>
        <div className={styles.score}>
          <span className={styles.scorenumber}>{score}</span>
          <span>Total Score</span>
        </div>

        <div className={styles.rightsection}>
          <p>{selecterror}</p>
          <div className={styles.numbers}>
            {arrnumber.map((e) => (
              <span
                onClick={() => changeselectnuber(e)}
                className={
                  selectednumber == e ? styles.chngenumber : styles.number
                }
              >
                {e}
              </span>
            ))}
          </div>
          <span>Select Number</span>
        </div>
      </div>

      <div className={styles.midpart}>
       
        <img
          onClick={() => randomgenerate(1, 7)}
          src={`/images/dice/dice_${currentdice}.png`}
          // src={`/diceimg/dice_${currentdice}.png`}
          alt=""
        />
        <span>Click On Dice To Roll</span>
        <button onClick={resetscore}>Reset Score</button>
        <button onClick={()=>setshowrules((prev)=> !prev)}>
          {showrules==false?"Show":"Hide"} Rule</button>
        
        {showrules && <Showrules/>}
        {/* it means if showrules is true than only Showrules page will */}
       {/* { showrules==false ? <Showrules/> : ""} */}
      </div>
    </>
  );
}

export default Gameinstructionpage;
