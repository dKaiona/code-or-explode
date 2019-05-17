import React from 'react'


import './Module1.css';

function BombModule1(props) {

    const { strikeAdd } = props

  return (
    <div className='bomb-module-1'>
        <div className='div'>
            <div onClick={() => strikeAdd()}>Red wire</div>
            <div onClick={() => strikeAdd()}>Black wire</div>
            <div onClick={() => strikeAdd()}>Green wire</div>
            <div onClick={() => alert('Good Work :D')}>Green wire</div>
        </div>
        <p>S: 584268</p>
    </div>
  )
}

export default BombModule1