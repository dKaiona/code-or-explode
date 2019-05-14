import React from "react";
import Timer from 'react-compound-timer'




export default function App() {


  return (
    <div className = 'Time'>     
      <Timer
    initialTime={1800000}
    direction="backward"
    checkpoints={[
      {
        time: 0,
        callback: () => alert('BOOM!')
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
