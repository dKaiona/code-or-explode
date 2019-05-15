import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

export default function Info() {
  return (
    <Black>
      <TextTop>

      <Link to='/' ><h1>Home</h1></Link>
      <h1>
        Game Overview
      </h1>
      <h2>Keep Coding and Nobody Explodes is a local multiplayer party game for two or <br/>
      more players. The Objective of the game is defuse a bomb before time runs out by <br/> 
      using the instructions and solving the toy problems found in the Bomb Defusal Manual.
      </h2>
      </TextTop>
      <GameImg>
        <img className='howToPlayPic' src='https://images.unsplash.com/photo-1517012068311-53ed5975e234?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='People playing game'/>
      </GameImg>
     
      <TextBottom>
        <h2>One player or two players take the role of the Bomb Tech. All other players take the role of<br/> 
        Info Tech who must use the <Link to='/bomb-manual'>Bomb Defusal Manual</Link> to guide the Defuser through the<br/> 
        challenging task of defusing a bomb </h2>
      </TextBottom>
    </Black>
  )
}

const Black = styled.div`
background-image: linear-gradient(to right, black, black, red);
position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%

`
const GameImg = styled.div`
background-image:linear-gradient(black, red,  black);


`

const TextBottom = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: 'Walter Turncoat', cursive;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
`;

const TextTop = styled.div`
  width: 100vw;
  height: 40vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: -5vw; 
  font-family: 'Walter Turncoat', cursive;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
 
  h1 {
    color: orangered;
    font-size: 40px;
    margin: 0px;
    text-decoration: underline;
    text-shadow: 5px 5px 20px black;
  }
`;