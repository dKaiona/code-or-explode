import React from 'react'
import Timer from '../Timer/Timer'

import Button from './Modules/Buttons/Button'
import Button2 from './Modules/Buttons/Button2'
import FlashingButton from './Modules/Buttons/FlashingButton'
import styled from 'styled-components'

const BombOutline = styled.div`
display: flex;
background-image: linear-gradient(silver, gray);
justify-content: space-around;
padding: 1vw;
transition: .3s;
`

export default function Bomb1() {
  return (
    <div>
      <section>
      <Timer/>
      </section>
      <BombOutline>
      <section>
      <FlashingButton/>
      </section>
      <section>
      <Button/>
      </section>
      <section>
      <Button2/>
      </section>
      </BombOutline>
    </div>
  )
}
