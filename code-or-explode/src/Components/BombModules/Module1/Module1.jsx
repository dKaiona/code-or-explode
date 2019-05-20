import React from 'react'


import './Module1.css';

function BombModule1(props) {

  const { strikeAdd, positionId, moduleComplete } = props

  return (
    <div className='bomb-module-1'>
        <div className='div'>
            <div onClick={() => strikeAdd()}>Red wire</div>
            <div onClick={() => strikeAdd()}>Black wire</div>
            <div onClick={() => strikeAdd()}>Green wire</div>
            <div onClick={() => moduleComplete(positionId)}>Green wire</div>
        </div>
        <div>{positionId}</div>
        <p>S: 584268</p>
    </div>
  )
}

export default BombModule1