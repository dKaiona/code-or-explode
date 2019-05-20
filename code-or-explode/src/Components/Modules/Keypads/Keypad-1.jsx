// If Statements 2: Inside the findCorrectTransportation function write an if/else statement that will 
//return check the variable age and return the correct response according to the following criteria.
// If age is from 3 to 7 "tricycle".
// If age is from 8 to 15 "bicycle".
// If age is 16 or greater return "car".
// Use the if and else keywords in your final solution.
// The variable age will always be a number and be changed during testing.

//Serial: 445A
//Key: Coke

// The Correct answer will be 'bicycle'
//if they get the correct answer then we will return the array [1, 3, 1, 2]
//if they get the wrong answer then we will return the array [1, 3, 2, 4]
import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'

export default function KeyPad() {
    const rightArray = [1, 3, 1, 2]
    let [playerArray, setPlayerArray] = useState([])

    if(playerArray.length === 1 && playerArray[0] === rightArray[0]) {
        if(playerArray.length === 2 && playerArray[1] === rightArray[1]){

        }
    }
        

    let ClickKey1 = () => {
     setPlayerArray([...playerArray, 1])
    }

    let ClickKey2 = () => {
        setPlayerArray([...playerArray, 2])
        console.log(playerArray)
       }

    let ClickKey3 = () => {
      setPlayerArray([...playerArray, 3])
      console.log(playerArray)
       }

let ClickKey4 = () => {
     setPlayerArray([...playerArray, 4])
     console.log(playerArray)
    }
    
    
    
    
    return (
        <KeyPadOutline>
         <Key1 onClick={ClickKey1}>1</Key1>
         <Key2 onClick={ClickKey2}>2</Key2>
         <Key3 onClick={ClickKey3}>3</Key3>
         <Key4 onClick={ClickKey4}>4</Key4>
       </KeyPadOutline>
     )
    
}

const KeyPadOutline = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
height: 34vh;
width: 99%;
margin: .5%;
background: black;
`
const Key1 = styled.div`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 42%;
height: 15vh;
text-align: center;
font-size: 95px;
`
const Key2 = styled.div`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 42%;
height: 15vh;
text-align: center;
font-size: 95px;
`
const Key3 = styled.div`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 42%;
height: 15vh;
text-align: center;
font-size: 95px;
`
const Key4 = styled.div`
background: slategray;
border: 3px groove gray;
margin: 1%;
width: 42%;
height: 15vh;
text-align: center;
font-size: 95px;
`