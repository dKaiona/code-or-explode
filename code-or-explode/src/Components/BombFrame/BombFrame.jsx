import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wires4 from "../Modules/Wires-4/Wires-4";
import BombTimer from "../Timer/Timer";
import Fail from "../Fail/Fail";
import Keypad1 from "../Modules/Keypads/Keypad-1";
import Keypad2 from "../Modules/Keypads/Keypad-2";
import FlashingButton from "../Modules/Buttons/FlashingButton";
import GreenFlash from "../Modules/Buttons/GreenFlash";
import Background from "../Modules/background/background";

import "./BombFrame.css";
import Success from "../Success/Success";

function BombFrame() {
  const [success, setSuccess] = useState(false);
  const [strikeNum, setStrikeNum] = useState("");
  const [failed, setFailed] = useState(false);
  const [completedNum, setCompletedNum] = useState({
    mod0: false,
    mod1: false,
    mod2: false,
    mod3: false,
    mod4: false,
    mod5: false
  });
  // eslint-disable-next-line
  const [moduleNum, setModuleNum] = useState(3);
  const [moduleHolder, setModuleHolder] = useState(<div />);
  // eslint-disable-next-line
  const [completedModsCount, setCompletedModsCount] = useState(0);

  if (strikeNum.length === 3) {
    setTimeout(() => {
      setStrikeNum("");
    }, 200);
    if (failed === false) {
      setFailed(true);
    }
  }

  let holder = 0;
  for (const key in completedNum) {
    if (completedNum[key] === true) {
      holder = ++holder;
    }
    console.log(holder);

    if (holder === moduleNum) {
      if (success === false) {
        setSuccess(true);
      }
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

  let moduleComplete = async modPositionInt => {
    await setCompletedNum(completedNumPrev => {
      return { ...completedNumPrev, [modPositionInt]: true };
    });
  };
  console.log(completedNum);

  let modArr = [
    "Wires4",
    "Keypad1",
    "Keypad2",
    "FlashingButton",
    "GreenFlash",
    "Background"
  ];

  let modBuilder = position => {
    let index = Math.floor(Math.random() * modArr.length);

    switch (modArr[index]) {
      case "Wires4":
        modArr.splice(index, 1);
        return (
          <Wires4
            key="1"
            strikeAdd={strikeAdd}
            positionId={position}
            moduleComplete={moduleComplete}
          />
        );
      case "Keypad1":
        modArr.splice(index, 1);
        return (
          <Keypad1
            key="2"
            strikeAdd={strikeAdd}
            positionId={position}
            moduleComplete={moduleComplete}
          />
        );
      case "Keypad2":
        modArr.splice(index, 1);
        return (
          <Keypad2
            key="3"
            strikeAdd={strikeAdd}
            positionId={position}
            moduleComplete={moduleComplete}
          />
        );
      case "FlashingButton":
        modArr.splice(index, 1);
        return (
          <FlashingButton
            key="4"
            strikeAdd={strikeAdd}
            positionId={position}
            moduleComplete={moduleComplete}
          />
        );
      case "GreenFlash":
        modArr.splice(index, 1);
        return (
          <GreenFlash
            key="5"
            strikeAdd={strikeAdd}
            positionId={position}
            moduleComplete={moduleComplete}
          />
        );

        case "Background":
          modArr.splice(index, 1);
          return (
            <Background
              key="6"
              strikeAdd={strikeAdd}
              positionId={position}
              moduleComplete={moduleComplete}
            />
          );

      default:
        return "Yo Mama";
    }
  };

  let modSetter = () => {
    console.log(completedNum)
    setModuleHolder(
      <div className="bombFrame">
        <div className="bombMod">{modBuilder("mod0")}</div>
        <div className="bombMod">{modBuilder("mod1")}</div>
        <div className="bombMod">{modBuilder("mod2")}</div>
        <div className="bombMod">{modBuilder("mod3")}</div>
        <div className="bombMod">{modBuilder("mod4")}</div>
        <div className="bombMod">{modBuilder("mod5")}</div>
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
      <div className="timer">
        <div className="strike-div">
          <div className="strikeCount">{strikeNum}</div>
        </div>
        <div className="top-wires-box">
          <div className="top-wires1" />
          <div className="top-wires2" />
        </div>
        <div className="top-boxes" />
        <div className="top-boxes" />
        <div className="top-boxes" />
        <div className="timer-div">
          <BombTimer timeEnder={timeEnder} success={success} />
        </div>
      </div>

          {/* <div className="lightHolder">
            <div className={ completedNum.mod0 ? "light" : "lightOff" }></div>
          </div> */}
      {moduleHolder}
      {/* Hardcode modules for testing here */}
      <Link to="/desk">
        <button className='back-btn'> <i className="fas fa-arrow-left"></i></button>
      </Link>
      {success ? <Success /> : null}
    </div>
  );
}

export default BombFrame;
