import React from 'react'


import './Module1.css';

function BombModule1(props) {

  const { strikeAdd, positionId, moduleComplete } = props

  return (
    <div className='bomb-module-1'>
        <div className='wireBorder'>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => strikeAdd()} className="blueWire"></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => strikeAdd()} className="redWire"></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => strikeAdd()} className="blackWire"></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => moduleComplete(positionId)} className="greenWire"></button>
            <div className="wireEnd"></div>
          </div>
        </div>
        <p>S: 584268</p>
    </div>
  )
}

export default BombModule1