import React, {useState} from 'react'
import styled from 'styled-components'

const ModuleOutline = styled.div`
`

const RedButton = styled.button`
font-size: 5vw;
border-radius: 100%;
padding: 7vw;
background-color: darkred;
color: white;
border: 10px double;
outline: none;
box-shadow: 5px 5px 5px black;
text-shadow: 2px 2px 5px black;
&:hover {
  background-color: red;
  border-radius: 100%;

  transition: .3s;
}
`


export default function Button() {

 function handleButtonPress() {
   let buttonPressTimer = setTimeout(() => {
     alert('Holding the button')
   }, 2500);
  }

  // function handleButtonRelease() {
  //   let earlyRelease = setTimeout(() => {
  //     if 
  //   },2499);
  // }

  return (
    <div>
   
      <RedButton onMouseDown={handleButtonPress} >Hold</RedButton>
     
    </div>
  )
}

// onMouseUp={handleButtonRelease}
