// Complete the correctTransport function.
// Check the variable age and return the correct response according to the following criteria.
// If age is from 3 to 7 "tricycle".
// If age is from 8 to 15 "bicycle".
// If age is 16 or greater return "car".

//Serial: 445A1
//Key: Apple

// The Correct answer will be 'bicycle'
// if they get the correct answer then we will return the array [1, 3, 1, 2, 4]
// if they get the wrong answer then we will return the array [1, 3, 2, 4, 1]
import React, {useState, Fragment} from 'react'
import styled, {keyframes} from 'styled-components'

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
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
height: 29vh;
width: 96%;
margin:auto;
background: black;
padding: 5px;
`
const Key1 = styled.button`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 32%;
height: 12vh;
text-align: center;
font-size: 75px;

`
const Key2 = styled.button`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 32%;
height: 12vh;
text-align: center;
font-size: 75px;
`
const Key3 = styled.button`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 32%;
height: 12vh;
text-align: center;
font-size: 75px;
`
const Key4 = styled.button`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 32%;
height: 12vh;
text-align: center;
font-size: 75px;
`
const Serial = styled.h4`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 97%;
height: 4vh;
text-align: center;
font-size: 19px;
`

// function ifState() {
  
//   setTimeout(() => {
    
//     if(playerArray.length === 1 && playerArray[0] === rightArray[0]) {
//       console.log(playerArray, 'first one right') 
//     } else if(playerArray.length === 1 && playerArray[0] !== rightArray[0]){
//      strikeAdd()
//     }
    
//     if(playerArray.length === 2 && playerArray[1] === rightArray[1]) {
//       console.log(playerArray, 'secound right')
//     } else if(playerArray.length === 2 && playerArray[1] !== rightArray[1]){
//      strikeAdd()
//     }
    
    
//     if(playerArray.length === 3 && playerArray[2] === rightArray[2]) {
//       console.log(playerArray, 'third right')
//     } else if(playerArray.length === 3 && playerArray[2] !== rightArray[2]){
//       strikeAdd()
      
//     }
    
//     if(playerArray.length === 4 && playerArray[3] === rightArray[3]) {
//       console.log(playerArray, 'four right')
//     } else if(playerArray.length === 4 && playerArray[3] !== rightArray[3]){
//       strikeAdd()
      
//     }
//   }, 1000);
    
// }  
