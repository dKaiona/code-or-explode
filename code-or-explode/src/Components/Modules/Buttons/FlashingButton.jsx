import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'

const Flashing = keyframes`
  0%{
      
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
  25%{
     
      background: orangered;
      color: white;
      font-weight: normal;
      border: 10px double;
      }
  50%{
    
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
  75%{
      
      background: orangered;
      color: white;
      font-weight: normal;
      border: 10px double;
      }
  100%{
     
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
}
`;



const Flash = styled.button`
font-size: 76px;
border-radius: 100%;
padding: 21%;
background-color: white;
color: black;
border: 10px double;
outline: none;
box-shadow: 5px 5px 5px black;
text-shadow: 2px 2px 5px black;
animation: ${Flashing} 2.5s infinite 0s linear;
`





export default function FlashingButton(props) {
  
  const { strikeAdd, positionId, moduleComplete } = props;

 function stopFlashing(e) {
  let tripple = e.detail
  console.log(e.detail)
  if (tripple === 3) {
    return alert('stop Flashing')
  }
 }


  return (
    <div>
      
      <Flash onClick={stopFlashing}>Push It</Flash>
    
    </div>
  )
}