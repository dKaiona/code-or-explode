import React from 'react';
import styled from 'styled-components';
import bomb from '../Images/bomb.png'
import pic1 from '../Images/pic1.jpg';

function Landing() {
  return (
    <Wrapper>
     
      <nav>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '50px'}}>
          <img src={bomb} alt="bomb" style={{height: '40px', backgroundColor: 'red', borderRadius: '4px', margin: '10px'}}/>
          <h1>Code Bomb</h1>
        </div>
        <NavLinks>
        <button>Info</button>
        <button>About</button>
        </NavLinks>
      </nav>
      <Header>
        <div className='text' >
        <h1>some text</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aut dolorem atque quidem architecto! Dolorum eligendi beatae recusandae tempore quos aspernatur excepturi! Omnis voluptatem ipsam, expedita commodi officiis ut id.</p>
        </div>
     
        <Play>
          <h2>Play Now</h2>
          <div>
          <button>Beginner</button>
          <button>Intermediate</button>
          </div>
        </Play>
       </Header>
      <img className='img' src={pic1} alt="img"/>
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
  background: url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80');
  background-repeat: none;
  background-position: fixed;
  background-size: cover;
  top: 0;
  z-index: -2;
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
  .img {
    width: 580px;
    opacity: 10;
    position: absolute;
    left: 10%;
    top: 50%;
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

  }
`;
const Play = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: -webkit-linear-gradient(135deg, green , #00ff00 , green);
  z-index: 1;
  div {
    width:90%;
    display: flex;
    justify-content:space-between;
    bottom: 0;
    
  }
  button {
    padding: 14px;
    border-radius: 10px;
    font-size: 20px;
    background:  -webkit-linear-gradient(135deg, green , #00ff00 , green);
    border: none;
    box-shadow: 5px 5px 10px rgb(16, 18, 20);
    &:hover {
      background:  -webkit-linear-gradient(45deg, green , #00ff00 , green);
    }
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