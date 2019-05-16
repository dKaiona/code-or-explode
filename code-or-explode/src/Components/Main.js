import React from 'react';
import styled from 'styled-components';


export default function Main() {
  return (
    <div>
      <h1>Main page</h1>
      <Play>
          <h2>Play Now</h2>
          <div>
          <button>Beginner</button>
          <button>Intermediate</button>
          </div>
        </Play>
      
    </div>
  )
}
const Play = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: -webkit-linear-gradient(135deg, #0c420a , #22911e , #0c420a);
  z-index: 1;
  color: whitesmoke;
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
    background:  -webkit-linear-gradient(135deg, #0c420a , #22911e , #0c420a);
    border: none;
    box-shadow: 5px 5px 10px rgb(16, 18, 20);
    outline: none;
    &:hover {
      background:  -webkit-linear-gradient(45deg, #0c420a , #22911e , #0c420a);
    }
  }
`;