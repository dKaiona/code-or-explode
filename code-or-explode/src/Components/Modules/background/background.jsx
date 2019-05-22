import React from 'react';
import styled from 'styled-components';

export default function background() {
    return (
        <Display>
            <div className='screw-container'>
                <div className='screw'></div>
                <div className='screw'></div>
            </div>
            <div className='screw-container'>
                <div className='screw'></div>
                <div className='screw'></div>
            </div>
        </Display>
    )
}
const Display = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(51, 23, 1), rgb(51, 23, 1) 5%, rgb(92, 50, 1) 5%, rgb(92, 50, 1) 10%, rgb(58, 27, 2) 10%, rgb(51, 23, 1) 15%, rgb(92, 50, 1) 15%, rgb(92, 50, 1) 20%, rgb(51, 23, 1) 20%, rgb(51, 23, 1) 25%, rgb(92, 50, 1) 25%, rgb(92, 50, 1) 30%, rgb(51, 23, 1) 30%, rgb(51, 23, 1) 35%, rgb(92, 50, 1) 35%, rgb(92, 50, 1) 40%, rgb(51, 23, 1) 40%, rgb(51, 23, 1) 45%, rgb(92, 50, 1) 45%, rgb(92, 50, 1) 50%,  rgb(51, 23, 1) 50%, rgb(51, 23, 1) 55%, rgb(92, 50, 1) 55%, rgb(92, 50, 1) 60%, rgb(51, 23, 1) 60%, rgb(51, 23, 1) 65%, rgb(92, 50, 1) 65%, rgb(92, 50, 1) 70%, rgb(51, 23, 1) 70%, rgb(51, 23, 1) 75%, rgb(92, 50, 1) 75%, rgb(92, 50, 1) 80%, rgb(51, 23, 1) 80%, rgb(51, 23, 1) 85%, rgb(92, 50, 1) 85%, rgb(92, 50, 1) 90%, rgb(51, 23, 1) 90%, rgb(51, 23, 1) 95%, rgb(92, 50, 1) 95%) ;
    border: 20px outset rgb(27, 13, 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  .screw-container {
    position: relative;
    width: 99%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }
  .screw {
    width: 20px;
    height: 20px;
    background: gray;
    -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    
  } 
`;
