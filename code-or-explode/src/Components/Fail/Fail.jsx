import React from 'react';
import styled from 'styled-components';


function Fail() {
  return (
    <FailDiv>
        <p>You have Lost and all the things are exploded!!!!!!</p>
    </FailDiv>
  )
}

export default Fail

const FailDiv = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-color: #888;
left: 0;
top: 0;
z-index: 3;
`

// const FailDiv = styled.div`
// position: absolute;
// height: 100%;
// width: 100%;
// background-color: #888;
// `