// Simple math : return the value of 1 * 3
// example 5 * 5 = 25
// Key: Ford
// The corecct answer will be 3
// If they get it wrong return anything but 3

import React, { useState } from "react";
import styled from "styled-components";

const Flash = styled.button`
width: 60%;
height: 80%;
border-radius: 100%;
background-color: darkred;
color: black;
border: 8px double #A6A6A6;
outline: none;
box-shadow: 2px 2px 5px black;

&:hover {
  border: 8px double red;
  box-shadow:inset 10px 10px 80px black;
  
}

h1 {
  font-size: 3.8vh;
  font-family: 'Orbitron', sans-serif;
  font-weight: bolder;
  text-shadow: 2px 2px 60px red;
  color: red;
  transition: 1s;
  animation: flash 1.5s infinite 0s linear;
  &:hover{
    text-shadow: 4px 4px 45px white;
    animation: flash 1s infinite 0s linear;
    transition: .5s;
    font-size: 3.9vh;
  }
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  h1 {
    font-size: 3.8vh;
    font-family: "Orbitron", sans-serif;
    font-weight: bolder;
    text-shadow: 2px 2px 60px red;
    color: red;
    transition: 1s;
    animation: flash 1.5s infinite 0s linear;
    &:hover {
      text-shadow: 4px 4px 45px white;
      animation: flash 1s infinite 0s linear;
      transition: 0.5s;
    }
  }
  @-webkit-keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0.4;
    }
  }

  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0.4;
    }
  }

  .flash {
    -webkit-animation-name: flash;
    animation-name: flash;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px ridge slategray;
  background-image: linear-gradient(
    45deg,
    black 10%,
    yellow 10%,
    yellow 20%,
    black 20%,
    black 30%,
    yellow 30%,
    yellow 40%,
    black 40%,
    black 50%,
    yellow 50%,
    yellow 60%,
    black 60%,
    black 70%,
    yellow 70%,
    yellow 80%,
    black 80%,
    black 90%,
    yellow 90%
  );
`;

export default function FlashingButton(props) {
  const { strikeAdd, positionId, moduleComplete } = props;
  let [playerArray, setPlayerArray] = useState([]);
  const [rightArray] = useState([1, 1]);
  let [testInterval, setTestInterval] = useState(0);
  const [light, setLight] = useState(false);

  if (testInterval === 5) {
    checkArr();
  }

  let ClickKey1 = () => {
    setPlayerArray([...playerArray, 1]);
    if (playerArray.length === 0) {
      setInterval(() => {
        setTestInterval(prevTestInterval => ++prevTestInterval);
      }, 300);
    }
    setTestInterval(0);
  };

  function checkArr() {
    if (playerArray.length === 3) {
      if(light === false){
        setLight(true)
      }
      return moduleComplete(positionId);
    } else if (playerArray !== rightArray && playerArray.length > 0) {
      strikeAdd();
      setPlayerArray([]);
    }
  }
  return (
    <Wrapper>
      <div className="lightHolder buttonLight">
        <div className={light ? "light" : "lightOff"} />
      </div>
      <Flash onClick={ClickKey1}>
        <h1>Push It!</h1>
      </Flash>
    </Wrapper>
  );
}
