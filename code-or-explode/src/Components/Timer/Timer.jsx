import React from "react";
import Timer from "react-compound-timer";

export default function BombTimer(props) {

  const { timeEnder, success } = props
  
  if(success){
    let buttonTrigger = document.getElementById('stopperButton')
    buttonTrigger.click();

  }

  return (
    <div className="Time">
      <Timer
        initialTime={1000 * 60 * 5}
        direction="backward"
        checkpoints={[
          {
            time: 0,
            callback: () => timeEnder()
          }
        ]}
      >
        {({stop}) => (
          <React.Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
            <div id="stopperButton" onClick={stop}></div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}
