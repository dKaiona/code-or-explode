// Simple math: return the value of 6 + 4 - 8
// Example: 5 + 1 - 2 = 4
// Key: Honda
// The Correct answer will be 2
// If they get the wrong answer return any number besides two

import React, {useState} from 'react'
import styled from 'styled-components'




const Flash = styled.button`
width: 60%;
height: 80%;
border-radius: 100%;
background-color: darkgreen;
color: black;
border: 8px double;
outline: none;
box-shadow: 5px 5px 5px black;
&:hover {
  border: 15px double red;
  box-shadow:inset 10px 10px 90px black;
  background-color: green;
}


h1 {
  font-size: 3.8vh;
  font-family: 'Orbitron', sans-serif;
  font-weight: bolder;
  text-shadow: 2px 2px 60px green;
  color: white;
  animation: flash 2s infinite 0s linear;
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 60px #ADFF2F;
    animation: flash 3s infinite 0s linear;
    transition: .5s;
  }
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: .9;
  }

  25%,
  75% {
    opacity: 0.3;
  }
  }

  @keyframes flash {
    from,
    50%,
    to {
      opacity: .9;
    }

    25%,
    75% {
      opacity: 0.3;
    }
  }

  .flash {
    -webkit-animation-name: flash;
    animation-name: flash;
  }
`
const Wrapper =  styled.div`
height: 100%;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
border: 10px ridge slategray;
background-image: linear-gradient(135deg, #43d306 10%, white 10%, white 20%, #43d306 20%, #43d306 30%, white 30%, white 40%, #43d306 40%, #43d306 50%, white 50%, white 60%, #43d306 60%, #43d306 70%, white 70%, white 80%, #43d306 80%, #43d306 90%, white 90%);
`





export default function FlashingButton(props) {

const { strikeAdd, positionId, moduleComplete } = props
let [playerArray, setPlayerArray] = useState([])
const [rightArray] = useState([1])
let [testInterval, setTestInterval] = useState(0)

if(testInterval === 5){
  checkArr()
}
 
let ClickKey1 = () => {
  setPlayerArray([...playerArray, 1])
  if(playerArray.length === 0){
    setInterval(() => {
     
      setTestInterval((prevTestInterval) => ++prevTestInterval)
    }, 300)
  }
  setTestInterval(0)
}

function checkArr() {
    if(playerArray.length === 2){
      console.log('solved')
    return  moduleComplete(positionId)
    } else if( playerArray !== rightArray && playerArray.length > 0 ) {
      strikeAdd()
      setPlayerArray([])
    }
  
}
  return (
    <Wrapper>
      
      <Flash onClick={ClickKey1}><h1>Abort!</h1></Flash>
    
    </Wrapper>
  )
}