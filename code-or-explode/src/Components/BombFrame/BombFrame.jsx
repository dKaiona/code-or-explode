import React, { useState } from 'react';
import BombModule1 from '../BombModules/Module1/Module1';
import { Link } from "react-router-dom";

import './BombFrame.css';

function BombFrame() {
  const [strikeNum, setStrikeNum] = useState(0);

  if(strikeNum === 3){
    alert("exploded!!!")
    setStrikeNum(0)
  }

  let strikeAdd = () => {
    setStrikeNum(strikeNum + 1)
  }

  return (
    <div className="bombView">
    <div className="strikeCount">Strikes:{strikeNum}</div>
      <div className="bombFrame">
        <div className="bombMod" ><BombModule1 strikeAdd={strikeAdd}/></div>
        <div className="bombMod" >2</div>
        <div className="bombMod" >3</div>
        <div className="bombMod" ><BombModule1 strikeAdd={strikeAdd}/></div>
        <div className="bombMod" >5</div>
        <div className="bombMod" >6</div>
      </div>
      <Link to="/desk">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default BombFrame