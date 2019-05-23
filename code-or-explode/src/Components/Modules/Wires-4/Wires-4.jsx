import React, { useState } from 'react'


import './Wires-4.css';

function Wires4(props) {
  
  const { strikeAdd, positionId, moduleComplete } = props
  
  const [blueCut, setBlueCut ] = useState(false)
  const [redCut, setRedCut ] = useState(false)
  const [blackCut, setBlackCut ] = useState(false)
  const [greenCut, setGreenCut ] = useState(false)
  const [light, setLight] = useState(false)

  let cutTheBlueWire = () => {
    strikeAdd()
    setBlueCut(true)
  }

  let cutTheGreenWire = () => {
    strikeAdd()
    setGreenCut(true)
  }

  let cutTheRedWire = () => {
    moduleComplete(positionId)
    setRedCut(true)
    setLight(true)
  }

  let cutTheBlackWire = () => {
    strikeAdd()
    setBlackCut(true)
  }

  return (
    <div className='bomb-module-1'>
       <p>SERIAL: 584268</p>
        <div className='wireBorder'>
          <div className="lightHolder">
            <div className={ light ? "light" : "lightOff" }></div>
          </div> 
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => cutTheBlueWire()} className={ blueCut ? "blueWire blueCut" : "blueWire "} ></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => cutTheBlackWire()} className={ blackCut ? "blackWire blackCut" : "blackWire "}></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => cutTheGreenWire()} className={ greenCut ? "greenWire greenCut" : "greenWire "}></button>
            <div className="wireEnd"></div>
          </div>
          <div className="wireWrapper">
            <div className="wireEnd"></div>
            <button onClick={() => cutTheRedWire()} className={ redCut ? "redWire redCut" : "redWire "}></button>
            <div className="wireEnd"></div>
          </div>
        </div>
       
    </div>
  )
}

export default Wires4