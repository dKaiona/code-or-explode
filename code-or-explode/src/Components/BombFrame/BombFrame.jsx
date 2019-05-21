import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BombModule1 from "../BombModules/Module1/Module1";
import BombTimer from "../Timer/Timer";
import Fail from "../Fail/Fail";
import Keypad1 from '../Modules/Keypads/Keypad-1'
import Keypad2 from '../Modules/Keypads/Keypad-2'
import FlashingButton from '../Modules/Buttons/FlashingButton'

import "./BombFrame.css";
import Success from "../Success/Success";

function BombFrame() {
  const [success] = useState(false)
  const [strikeNum, setStrikeNum] = useState("");
  const [failed, setFailed] = useState(false);
  const [completedNum, setCompletedNum] = useState([
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  // eslint-disable-next-line
  const [moduleNum, setModuleNum] = useState(3);
  const [moduleHolder, setModuleHolder] = useState(<div />);

  if (strikeNum.length === 3) {
    setTimeout(() => {
      setStrikeNum("");
    }, 200);
    if (failed === false) {
      setFailed(true);
    }
  }
  

  let timeEnder = () => {
    setTimeout(() => {
      setStrikeNum("XXX");
    }, 200);
  };

  let strikeAdd = () => {
    setStrikeNum(strikePrev => strikePrev + "X");
  };

  let moduleComplete = modPositionInt => {
    let holder = [...completedNum]
    holder[modPositionInt] = true
    setCompletedNum(holder);
  };

  let modArr = ["BombModule1", "Keypad1", "Keypad2", "FlashingButton", 5, 6];

  let mod1 = position => {
    let index = Math.floor(Math.random() * modArr.length);

    switch (modArr[index]) {
      case "BombModule1":
        modArr.splice(index, 1);
        return (
          <BombModule1 key="1" strikeAdd={strikeAdd} positionId={position} moduleComplete={moduleComplete} />
        );
      case "Keypad1":
        modArr.splice(index, 1);
        return <Keypad1 key ='2' strikeAdd={strikeAdd} positionId={position} moduleComplete={moduleComplete} />;
      case "Keypad2":
        modArr.splice(index, 1);
        return <Keypad2 key ='3' strikeAdd={strikeAdd} positionId={position} moduleComplete={moduleComplete} />;
      case "FlashingButton":
        modArr.splice(index, 1);
        return <FlashingButton key ='4' strikeAdd={strikeAdd} positionId={position} moduleComplete={moduleComplete} />;;
      case 5:
        modArr.splice(index, 1);
        return 55;
      case 6:
        modArr.splice(index, 1);
        return 66;
      default:
        return "Yo Mama";
    }
  };

  let modSetter = () => {
    setModuleHolder(
      <div className="bombFrame">
        <div className="bombMod">{mod1(0)}</div>
        <div className="bombMod">{mod1(1)}</div>
        <div className="bombMod">{mod1(2)}</div>
        <div className="bombMod">{mod1(3)}</div>
        <div className="bombMod">{mod1(4)}</div>
        <div className="bombMod">{mod1(5)}</div>
      </div>
    );
  };

  useEffect(() => {
    modSetter();
    // eslint-disable-next-line
  }, []);
  
  return failed ? (
      <Fail />
  ) : (
    <div className="bombView">
      <div>{`Completed ${completedNum} `}</div>
      <div className="strikeCount">Strikes:{strikeNum}</div>
      <div>
        <BombTimer timeEnder={timeEnder} />
      </div>
      {moduleHolder}
      {/* Hardcode modules for testing here */}
      <Link to="/desk">
        <button>Back</button>
      </Link>
      { success ?
        <Success />
        :
        null
      }
    </div>

  );
}

export default BombFrame;
