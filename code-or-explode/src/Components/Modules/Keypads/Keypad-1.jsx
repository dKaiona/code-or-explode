// Complete the correctTransport function.
// Check the variable age and return the correct response according to the following criteria.
// If age is from 3 to 7 "tricycle".
// If age is from 8 to 15 "bicycle".
// If age is 16 or greater return "car".

//Serial: 445A1
//Key: Apple

// The Correct answer will be 'bicycle'
//if they get the correct answer then we will return the array [1, 3, 1, 2, 4]
//if they get the wrong answer then we will return the array [1, 3, 2, 4, 1]
import React, { useState } from 'react'
import styled from 'styled-components'

export default function KeyPad(props) {
  const { strikeAdd, positionId, moduleComplete } = props
    const [rightArray] = useState([1, 3, 1, 2])
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
          <Serial>SERIAL: 445A1</Serial>
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
display: flex;
align-items: center;
justify-content: center;
background: slategray;
border: 13px outset gray;
width: 39%;
height: 37%;
font-size: 5.5vh;
font-weight: bold;
margin: 10px;
&:hover {
  outline: 3px solid red;
  /* border:12px groove red; */
}

`
const Key2 = styled.button`
background: slategray;
border: 13px outset gray;
width: 39%;
height: 37%;
font-size: 5.5vh;
font-weight: bold;
margin: 10px;
&:hover {
  outline: 3px solid red;
}
`
const Key3 = styled.button`
background: slategray;
border: 13px outset gray;
width: 39%;
height: 37%;
font-size: 5.5vh;
font-weight: bold;
margin: 10px;
&:hover {
  outline: 3px solid red;
}
`
const Key4 = styled.button`
background: slategray;
border: 13px outset gray;
width: 39%;
height: 37%;
font-size: 5.5vh;
font-weight: bold;
margin: 10px;
&:hover {
  outline: 3px solid red;
}
`
const Serial = styled.h4`
background: slategray;
border: 3px inset slategray;
width: 100%;
height: 10%;
text-align: center;
font-size: 3vh;
font-weight: bold;
margin: 0;
padding: 0;
`

