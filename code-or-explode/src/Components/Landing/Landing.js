import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import bomb from '../../Images/bomb.png';
import bomb2 from '../../Images/bomb.jpg';

function Landing() {
  return (
    <Wrapper>
     <img src={bomb2} alt="" style={{width: '100%', marginTop: '15em'}} />
      <nav>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '50px'}}>
          <img src={bomb} alt="bomb" style={{height: '40px', backgroundColor: 'red', borderRadius: '4px', margin: '10px'}}/>
          <h1>Code Bomb</h1>
        </div>
        <NavLinks>
          <Link to='/info-page' >
            <button>Info</button>
          </Link> 

          <Link to='/info-tech-page'>
            <button>Coder</button>
          </Link>  
        
        </NavLinks>
      </nav>
      <Header>
        <div className='text' >
        <h1>some text</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aut dolorem atque quidem architecto! Dolorum eligendi beatae recusandae tempore quos aspernatur excepturi! Omnis voluptatem ipsam, expedita commodi officiis ut id.</p>
        </div>
        <Link to='/main'>
          <Play>
            Play Now!
          </Play>
        </Link>
       </Header>
      
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
  width: 100vw;
  min-height: 120vh;
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
    width: 100vw;
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
    width: 100vw;
    height: 4em;
    margin-top: 0em;
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    color: rgb(0, 0, 0, .5);
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
  background: -webkit-linear-gradient(135deg, #0c420a , #22911e , #0c420a);
  color: rgb(0,0,0, .5);
  font-size: 45px;
  outline: none;
  border: none;
  margin-top: 40px;
  font-family: 'Walter Turncoat', cursive;
  font-weight: bold;
  &:hover {
      background:  -webkit-linear-gradient(45deg, #0c420a , #22911e , #0c420a);
      color: whitesmoke;
    }
`;
const Header = styled.header`
  width: 100vw;
  height: 40vh;
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
    font-size: 80px;
    color: orangered;
    margin: 0;
    padding: 0;

  }
  .text {
    width: 30%;
    position: top;
    
  }
`;
const About = styled.div`
  width: 100vw;
  height: 50vh;
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
    color: lightgray;
    padding: 18px;
    border: 2px solid rgb(0, 0, 0, .2);
  }
  h1 {
    color: orangered;
    font-size: 40px;
    margin: 0px;
    text-decoration: underline;
  }
`;