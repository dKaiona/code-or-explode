import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BombModule1 from "../BombModules/Module1/Module1";
import BombTimer from "../Timer/Timer";
import Fail from "../Fail/Fail";

import "./BombFrame.css";

function BombFrame() {
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

  // let failPopUp = () => {
  //   return <div />;
  // };

  if (strikeNum.length === 3) {
    setTimeout(() => {
      setStrikeNum("");
    }, 200);
    if (failed === false){
      setFailed(true)
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
    setStrikeNum(strikeNum + "X");
  };

  // let moduleComplete = () => {};

  let modArr = [
    "BombModule1",
    "thing",
    "thing2",
    4,
    5,
    6
  ];

  //<BombModule1 key="1" strikeAdd={strikeAdd} />
  let mod1 = (position) => {
    let index = Math.floor(Math.random() * (modArr.length))
    console.log(modArr[index]);
    let holder = []
    
    // modArr.splice(index, 1)
    switch (modArr[index]) {
      case "BombModule1":
        modArr.splice(index, 1)
        return <BombModule1 key="1" strikeAdd={strikeAdd} positionId={position} />
      case "thing":
        modArr.splice(index, 1)
        return 2
      case "thing2":
        modArr.splice(index, 1)
        return 22
      case 4:
        modArr.splice(index, 1)
        return 44
      case 5:
        modArr.splice(index, 1)
        return 55
      case 6:
        modArr.splice(index, 1)
        return 66
      default:
      return "Yo Mama"
    }
    // console.log(holder);
    // return holder
  }

  let modHolder = () => {
    for(let i =0; i < 6 ; i++){
      return (
      <div className="bombFrame">
        <div className="bombMod">{mod1(0)}</div>
        <div className="bombMod">{mod1(1)}</div>
        <div className="bombMod">{mod1(2)}</div>
        <div className="bombMod">{mod1(3)}</div>
        <div className="bombMod">{mod1(4)}</div>
        <div className="bombMod">{mod1(5)}</div>
      </div>
      )
    }

  }
  
  
  useEffect(() => {

  }, [])

  console.log(modHolder);
  
  return failed ? (
      <Fail />
  ) : (
    <div className="bombView">
      {/* <div>{failPopUp()}</div> */}
      <div>{`Completed ${completedNum} `}</div>
      <div className="strikeCount">Strikes:{strikeNum}</div>
      <div>
        <BombTimer timeEnder={timeEnder} />
      </div>
      {modHolder()}
      {/* Hardcode modules for testing here */}
      <Link to="/desk">
        <button>Back</button>
      </Link>
    </div>

  );
}

export default BombFrame;
