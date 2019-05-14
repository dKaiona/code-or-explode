import React from 'react'
import styled from 'styled-components'

const BlueButton = styled.button`
font-size: 5vw;
border-radius: 100%;
padding: 7vw;
background-color: darkblue;
color: white;
border: 10px double;
outline: none;
box-shadow: 5px 5px 5px black;
text-shadow: 2px 2px 5px black;
transition: .3s;
`
const WrapperButton = styled.div`
&:hover ${BlueButton}  {
  background-color: blue;
  border-radius: 100%;

  transition: .3s;
}
`

export default function Button2() {
  return (
    <div>
      <WrapperButton>
      <BlueButton>Abort</BlueButton>
      </WrapperButton>
    </div>
  )
}