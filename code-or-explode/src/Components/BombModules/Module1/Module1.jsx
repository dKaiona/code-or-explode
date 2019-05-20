import React from 'react'


import './Module1.css';

function BombModule1(props) {

  const { strikeAdd, positionId, moduleComplete } = props

  return (
    <div className='bomb-module-1'>
        <div className='div'>
            <div onClick={() => strikeAdd()} className="blackWire"></div>
            <div onClick={() => strikeAdd()} className="redWire"></div>
            <div onClick={() => moduleComplete(positionId)} className="greenWire"></div>
            <div onClick={() => strikeAdd()} className="blueWire"></div>
        </div>
        <p>S: 584268</p>
    </div>
  )
}

export default BombModule1