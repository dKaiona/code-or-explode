import React, { useState } from "react";
import { Link } from "react-router-dom";
import BombModule1 from "../BombModules/Module1/Module1";
import BombTimer from "../Timer/Timer";
import Fail from "../Fail/Fail";

import "./BombFrame.css";

function BombFrame() {
  const [strikeNum, setStrikeNum] = useState("");
  const [failed, setFailed] = useState(false)

  let failPopUp = () => {
    return <div />;
  };

  if (strikeNum.length === 3) {
    setTimeout(() => {
      setStrikeNum("");
    }, 200);
    if (failed === false){
      setFailed(true)
    }
  }

  if(failed === true){
    failPopUp = () => {
      return <Fail />;
    };
    // setTimeout(() => {
    //   setFailed(false)
    // }, 20000);
  }

  let timeEnder = () => {
    setTimeout(() => {
      setStrikeNum('XXX')
    }, 200);
  }

  let strikeAdd = () => {
    setStrikeNum(strikeNum + "X");
  };

  return (
    <div className="bombView">
      <div>{failPopUp()}</div>
      <div className="strikeCount">Strikes:{strikeNum}</div>
      <div>
        <BombTimer timeEnder={timeEnder}/>
      </div>
      <div className="bombFrame">
        <div className="bombMod">
          <BombModule1 strikeAdd={strikeAdd} />
        </div>
        <div className="bombMod">2</div>
        <div className="bombMod">3</div>
        <div className="bombMod">
          <BombModule1 strikeAdd={strikeAdd} />
        </div>
        <div className="bombMod">5</div>
        <div className="bombMod">6</div>
      </div>
      <Link to="/desk">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default BombFrame;
