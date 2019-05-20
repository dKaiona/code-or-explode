import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BombModule1 from "../BombModules/Module1/Module1";
import BombTimer from "../Timer/Timer";
import Fail from "../Fail/Fail";

import "./BombFrame.css";

function BombFrame() {
  const [borderColor] = useState("#000000")
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
  const [moduleNum, setModuleNum] = useState(3);
  const [moduleHolder, setModuleHolder] = useState(<div />);

  // let failPopUp = () => {
  //   return <div />;
  // };

  if (strikeNum.length === 3) {
    setTimeout(() => {
      setStrikeNum("");
    }, 200);
    if (failed === false) {
      setFailed(true);
    }
  }

  // if (failed === true) {
  //   failPopUp = () => {
  //     return <Fail />;
  //   };
    // setTimeout(() => {
    //   setFailed(false)
    // }, 20000);
  

  let timeEnder = () => {
    setTimeout(() => {
      setStrikeNum("XXX");
    }, 200);
  };

  let strikeAdd = () => {
    setStrikeNum(strikePrev => strikePrev + "X");
  };

  let moduleComplete = modPositionInt => {
    // console.log('hit');
    let holder = [false, false, false, false, false, false]
    holder[modPositionInt] = true
    // console.log(holder, 'after hit');
    setCompletedNum(holder);
  };

  let modArr = ["BombModule1", "thing", "thing2", 4, 5, 6];

  let mod1 = position => {
    let index = Math.floor(Math.random() * modArr.length);

    switch (modArr[index]) {
      case "BombModule1":
        modArr.splice(index, 1);
        return (
          <BombModule1 key="1" strikeAdd={strikeAdd} positionId={position} moduleComplete={moduleComplete} />
        );
      case "thing":
        modArr.splice(index, 1);
        return 2;
      case "thing2":
        modArr.splice(index, 1);
        return 22;
      case 4:
        modArr.splice(index, 1);
        return 44;
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
    </div>

  );
}

export default BombFrame;
