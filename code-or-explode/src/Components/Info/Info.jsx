import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import gamePlay from '../../Images/Drawing (2).png'

export default function Info() {
  return (
    <Black>
      <TextTop>
      <div className='links'>
        <Link to='/'><button>Home</button></Link>
        <Link to='/desk'><button>Play</button></Link>
      </div> 
      <h1 className='h1' >
        Game Overview
      </h1>
      <h2>Keep Coding and Nobody Explodes is a local multiplayer party game for two or <br/>
      more players. The Objective of the game is defuse a bomb before time runs out by <br/> 
      using the instructions and solving the toy problems found in the Bomb Defusal Manual.
      </h2>
      </TextTop>
      <GameImg>
        <img className='howToPlayPic' src={gamePlay} alt='People playing game'/>
      </GameImg>
     
      <TextBottom>
        <h2>One player or two players take the role of the Bomb Tech. All other players take the role of<br/> 
        Info Tech who must use the <Link className='link' to='/info-tech-page'><button>Bomb Defusal Manual</button></Link> to guide the Defuser through the<br/> 
        challenging task of defusing a bomb.</h2>
      </TextBottom>
    </Black>
  )
}

const Black = styled.div`
  background-image: linear-gradient( black, black, red);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background-size: cover; 
`;
const GameImg = styled.div`



`;

const TextBottom = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: 'Walter Turncoat', cursive;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 50% 20%, 100% 0, 100% 100%, 0 100%);

  h2 {
    margin:1px;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 5px 5px 50px whitesmoke;
    line-height: 1.5
  }
  .link {
    button {
      font-size: 25px;
      border: none;
      background: -webkit-linear-gradient( red, black);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        animation: pulse .8s linear ;
        
      }
    }
    @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    50% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    }
    @keyframes pulse {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      50% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    .pulse {
      -webkit-animation-name: pulse;
      animation-name: pulse;
    }
  }
`;

const TextTop = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 0; 
  font-family: 'walter turncoat', cursive;
 
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
 
  .h1 {
    color: orangered;
    font-size: 50px;
    margin: -20px 0px 0px 0px;
    text-decoration: underline;
    text-shadow: 5px 5px 20px black;
    font-family: 'walter turncoat', cursive;
  }

  h2 {
    margin:1px;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 5px 5px 50px whitesmoke;
    line-height: 1.5;
  }
  .links {
    position: fixed;
    top: 1em;
    display: flex;
    width: 90%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: none;
    text-decoration: underline;
    button {
      font-size: 40px;
      border: none;
      background: -webkit-linear-gradient(135deg, black, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      transition: .6s;
      
      cursor: pointer;
      &:hover {
        animation: grow .4s forwards linear ;
      }  
    }
    @-webkit-keyframes grow {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      to {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
      
    }
    @keyframes grow {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      to {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
    }
    .grow {
      -webkit-animation-name: grow;
      animation-name: grow;
    }
  }
`;
