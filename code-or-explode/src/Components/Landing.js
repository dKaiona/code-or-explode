import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import bomb from '../Images/bomb.png';
import bomb2 from '../Images/bomb.jpg';
import Carousel from './Carousel';

function Landing() {
  return (
    <Wrapper>
     <img src={bomb2} alt="" style={{width: '100%', marginTop: '15em'}} />
      <nav>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '50px'}}>
          <img src={bomb} alt="bomb" style={{height: '40px', backgroundColor: 'red', borderRadius: '4px', margin: '10px'}}/>
          <h1>Keep Coding and Nobody Explodes</h1>
        </div>
        <NavLinks>
          <Link to='/info-page' >
            <button>How To Play</button>
          </Link> 

          <Link to='/info-tech-page'>
            <button>Coder</button>
          </Link>  
          
        </NavLinks>
      </nav>
      <Header>
        <div className='text' >
        <h1>Welcome!</h1>
        <p>To the game that will test your nerves, your communication skills, and your coding ability!</p>
        </div>
        <Link to='/desk'>
          <Play>
            Play Now!
          </Play>
        </Link>
      </Header>
      <div className="carousel">
        <Carousel />
      </div>
      <About>
        <h1>About</h1> 
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, officiis odit aperiam quam enim, animi earum minus architecto ad ipsa, voluptatem inventore fugiat quis perferendis et obcaecati reprehenderit. Adipisci, ex.</p>
      </About>
      <footer>
        <h2>Copywright 2019</h2>
      </footer>
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'kaushan script';
  background-repeat: no-repeat;
  background-position: bottom ;
  background-size: fill;
  top: 0;
  
  nav {
    display: flex;
    width: 100%;
    height: 4em;
    position: fixed;
    top: 0px;
    align-items: center;
    justify-content: space-between;
    background: -webkit-linear-gradient(left, #888b91 10%, #d1d2d3, #888b91);
    z-index: 2;
  };
  footer {
    background: rgb(211, 81, 33);
    width: 100%;
    height: 4em;
    margin-top: 0em;
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    color: rgb(0, 0, 0, .5);
  }
  .carousel {
    position: absolute;
    left: 40%;
    /* width: 550px; */
  }
`;
const NavLinks = styled.div`
  margin-right:2em;
  button {
    background: none;
    margin-right: 2em;
    padding: 5px 10px;
    font-size: 18px;
    border: none;
    outline: none;
  }
`;
const Play = styled.button`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
  background: -webkit-linear-gradient(135deg, red, black, black, red);
  color: whitesmoke;
  font-size: 45px;
  outline: none;
  border: none;
  margin-top: 40px;
  font-family: 'Walter Turncoat', cursive;
  font-weight: bold;
  box-shadow: 5px 5px 10px   rgb(16, 18, 20);
  &:hover {
      background:  -webkit-linear-gradient(45deg, red, black, black, red);
      color: whitesmoke;
      animation: bounce 1s linear;
      
  }
  @-webkit-keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

`;
const Header = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;
  position: absolute;
  top: 4rem;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  z-index: 1;
  font-family: 'Walter Turncoat', cursive;
  font-weight: bold;
  h1 {
    font-size: 70px;
    color: orangered;
    margin: 8px;
    padding: 0;
    text-shadow: 5px 5px 20px black;
    margin-left: 30px;
  }

  p {
    font-size: 25px;
    text-shadow: 5px 5px 50px whitesmoke;
    margin: 0px;
  }

  .text {
    width: 40%;
    position: top;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
const About = styled.div`
  width: 100%;
  height: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: -5vw; 
  font-family: 'Walter Turncoat', cursive;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d );
  clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
  p {
    width: 50%;
    background-color: rgb(0, 0, 0, .1);
    font-size: 20px;
    color: black;
    padding: 18px;
    border: 2px solid rgb(0, 0, 0, .2);
    text-shadow: 5px 5px 50px whitesmoke;
  }
  h1 {
    color: orangered;
    font-size: 40px;
    margin: 5px;
    text-decoration: underline;
    text-shadow: 5px 5px 20px black;
  }
`;