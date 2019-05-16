import React, { Component } from 'react';
import styled from 'styled-components';
const data = [
  {
    id: 1,
    imgUrl: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 2,
    imgUrl: 'https://images.unsplash.com/photo-1553868799-fa0a59fa2df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 3,
    imgUrl: 'https://images.unsplash.com/photo-1547973259-530f60421e59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 4,
    imgUrl: 'https://images.unsplash.com/photo-1555546415-c5c9b54f70f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 5,
    imgUrl: 'https://images.unsplash.com/photo-1551841461-59ab9f6d32a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  }
];
export default class Carousel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: data,
       index: 0
    }
  }
  previous = () => {
    if (this.state.index > 0)
    this.setState({index: this.state.index - 1})
    else this.setState({index: 4})
  }
  next = () => {
    if (this.state.index < 4)
    this.setState({index: this.state.index + 1})
    else this.setState({index: 0})
  }


  render() {
    let index = this.state.index;
    let img = this.state.id[index].imgUrl;
    return (
      <Wrapper>
        <img src={img} alt="" className="img"/>
        <button className='prev' onClick={this.previous} >{'<'}</button>
        <button className='next' onClick={this.next} >{'>'}</button>
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  width: 550px;
  height: 350px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  
  .img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 5px 5px 40px   rgb(16, 18, 20);
  }
  button {
    background: none;
    border: none;
    font-size: 45px;
    font-weight: bold;
    outline: none;
    color: lightgray;
    
    &:hover {
      font-size: 45px;
      color: lightskyblue;
      animation: pulse 1s infinite linear;
    }
    @-webkit-keyframes pulse {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
      }

      to {
        -webkit-transform: scale3d(1.2, 1.2, 1.2);
        transform: scale3d(1.2, 1.2, 1.2);
      }
    }
    @keyframes pulse {
       from {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }

        50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05);
          transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
          -webkit-transform: scale3d(1.2, 1.2, 1.2);
          transform: scale3d(1.2, 1.2, 1.2);
        }
    }
    .pulse {
      -webkit-animation-name: pulse;
      animation-name: pulse;
    }
  }
  .prev {
    position: absolute;
    left: -1em;
   
  }
  .next {
    position: absolute;
    right: -1em;
    
  }
`;

