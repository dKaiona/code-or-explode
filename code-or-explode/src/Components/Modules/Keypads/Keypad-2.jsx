//Instructions
// Write a function called createName.
// The function should return a single string value, which will be the result of 
// concatenating the existing variables firstName and lastName.
// NOTE: the returned value should have a space between the original two strings
// For example, with the existing variable values, createName should return "Jeremy Robertson"
//
//Serial: 555F7
//Key: Steps
//
// The Correct answer will be 'cd'
// if they get the correct answer then we will return the array [4, 4, 1, 2, 1]
// if they get the wrong answer then we will return the array [4, 4, 2, 3, 1]
import React, {useState} from 'react'
import styled from 'styled-components'

export default function KeyPad(props) {
  const { strikeAdd, positionId, moduleComplete } = props
    const [rightArray] = useState([4, 4, 1, 2])
    let [playerArray, setPlayerArray] = useState([])


    function checkArr() {
  if(JSON.stringify(rightArray) === JSON.stringify(playerArray)){
    console.log('solved')
    return  moduleComplete(positionId)
  } else if(playerArray.length === 4 && JSON.stringify(rightArray) !== JSON.stringify(playerArray)) {
    strikeAdd()
    setPlayerArray([])
  }
}


        

   let ClickKey1 = () => {
      setPlayerArray([...playerArray, 1])
      //ifState()
      checkArr()
      console.log(playerArray)
    }
    
    let ClickKey2 = () => {
      setPlayerArray([...playerArray, 2])
      //ifState()
      checkArr()
      console.log(playerArray)
       }

    let ClickKey3 = () => {
      setPlayerArray([...playerArray, 3])
      //ifState()
      checkArr()
      console.log(playerArray)
       }

let ClickKey4 = () => {
     setPlayerArray([...playerArray, 4])
    // ifState()
    checkArr()
    console.log(playerArray)
    }
    
    
    
    
    return (
      <>
          <Serial>SERIAL: 555F7</Serial>
        <KeyPadOutline>
         <Key1 onClick={ClickKey1}>1</Key1>
         <Key2 onClick={ClickKey2}>2</Key2>
         <Key3 onClick={ClickKey3}>3</Key3>
         <Key4 onClick={ClickKey4}>4</Key4>
       </KeyPadOutline>
       </>
     )
    
}

const KeyPadOutline = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
height: 90%;
width: 100%;
background: #00001a;
border: 10px ridge slategray;
`
const Key1 = styled.button`
background: slategray;
border: 13px outset gray;
width: 37%;
height: 40%;
text-align: center;
font-size: 65px;
margin: 10px;
&:hover {
  border:12px groove red;
}

`
const Key2 = styled.button`
background: slategray;
border: 13px outset gray;
width: 37%;
height: 40%;
text-align: center;
font-size: 65px;
margin: 10px;
&:hover {
  border:12px groove red;
}
`
const Key3 = styled.button`
background: slategray;
border: 13px outset gray;
width: 37%;
height: 40%;
text-align: center;
font-size: 65px;
margin: 10px;
&:hover {
  border:12px groove red;
}
`
const Key4 = styled.button`
background: slategray;
border: 13px outset gray;
width: 37%;
height: 40%;
text-align: center;
font-size: 65px;
margin: 10px;
&:hover {
  border:12px groove red;
}
`
const Serial = styled.h4`
background: slategray;
border: 3px inset slategray;
width: 100%;
height: 10%;
text-align: center;
font-size: 26px;
font-weight: bold;
margin: 0;
padding: 0;
`