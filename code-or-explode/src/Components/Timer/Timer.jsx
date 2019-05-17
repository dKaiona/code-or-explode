import React from "react";
import Timer from "react-compound-timer";

export default function BombTimer(props) {

  const { timeEnder } = props

  return (
    <div className="Time">
      <Timer
        initialTime={1000 * 5 * 1}
        direction="backward"
        checkpoints={[
          {
            time: 0,
            callback: () => timeEnder()
          }
        ]}
      >
        {() => (
          <React.Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}
