import React, { useState, useEffect } from "react";

export default function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState("");
  let [total, setTotal] = useState(20)
  
  
  function timer() {

      
      setInterval(() => {
           setTotal(--total)
        }, 1000);
        if (total === 0) {
         alert('boom!')
        }
    }
   
//   function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         console.log(timer)
        
        
//         if (--timer < 0) {
//           timer = duration;
//         }
//       }, 1000);
//       setTotal(timer)
// }   
    // setMinutes(getTimeRemaining(deadline).minutes)
    // setSeconds(getTimeRemaining(deadline).seconds);
    
  

  useEffect(() => {
      window.addEventListener( 'onFocus', timer())
  })
//     setMinutes(getTimeRemaining(deadline).minutes)
//   setSeconds(getTimeRemaining(deadline).seconds);

  return (
    <div>
      <h1>{`${total}`}</h1>
    </div>
  );
}
