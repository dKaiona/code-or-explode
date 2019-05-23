import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'

const Flashing = keyframes`
  
`;



const Flash = styled.button`
width: 200px;
height: 200px;
border-radius: 100%;
background-color: darkred;
color: black;
border: 10px double;
outline: none;
box-shadow: 5px 5px 5px black;


h1 {
  font-size: 55px;
  text-shadow: 2px 2px 60px red;
      color: red;
      animation: flash 1.5s infinite 0s linear;
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
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
      opacity: 1;
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
background-image: linear-gradient(45deg, black 10%, yellow 10%, yellow 20%, black 20%, black 30%, yellow 30%, yellow 40%, black 40%, black 50%, yellow 50%, yellow 60%, black 60%, black 70%, yellow 70%, yellow 80%, black 80%, black 90%, yellow 90%);
`





export default function FlashingButton(props) {

const { strikeAdd, positionId, moduleComplete } = props
let [playerArray, setPlayerArray] = useState([])
const [rightArray] = useState([1, 1])
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
    if(playerArray.length === 3){
      console.log('solved')
    return  moduleComplete(positionId)
    } else if( playerArray !== rightArray && playerArray.length > 0 ) {
      strikeAdd()
      setPlayerArray([])
    }
  
}
  return (
    <Wrapper>
      
      <Flash onClick={ClickKey1}><h1>Push It!</h1></Flash>
    
    </Wrapper>
  )
}