import React, { useState } from 'react'

import './bombFrame.css';

function BombFrame() {
  const [strikeNum, setStrikeNum] = useState(0);

  if(strikeNum === 3){
    alert("exploded!!!")
  }

  let strikeAdd = () => {
    setStrikeNum(strikeNum + 1)
  }

  return (
    <div className="bombView">
    <div className="strikeCount">Strikes:{strikeNum}</div>
    <button onClick={() => strikeAdd()}>strike</button>
      <div className="bombFrame">
        <div className="bombMod" >1</div>
        <div className="bombMod" >2</div>
        <div className="bombMod" >3</div>
        <div className="bombMod" >4</div>
        <div className="bombMod" >5</div>
        <div className="bombMod" >6</div>
      </div>
    </div>
  )
}

export default BombFrame