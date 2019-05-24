import React, { Component } from 'react'

export default class MemoryInstructions extends Component {
  render() {
    return (
      <div className="textBlock">
        <p>
        On the Subject of Memory
        <br></br>
        Memory is a fragile thing but so is everything else when a bomb goes off, so pay
        attention!
        Press the correct button to progress the module to the
        next stage. Complete all stages to disarm the module.
        Pressing an incorrect button will reset the module back
        to stage 1.
        Button positions are ordered from left to right.
        Stage 1:
        If the display is 1, press the button in the second position.
        If the display is 2, press the button in the second position.
        If the display is 3, press the button in the third position.
        If the display is 4, press the button in the fourth position.
        Stage 2:
        If the display is 1, press the button labeled "4".
        If the display is 2, press the button in the same position as you pressed in stage 1.
        If the display is 3, press the button in the first position.
        If the display is 4, press the button in the same position as you pressed in stage 1.
        Stage 3:
        If the display is 1, press the button with the same label you pressed in stage 2.
        If the display is 2, press the button with the same label you pressed in stage 1.
        If the display is 3, press the button in the third position.
        If the display is 4, press the button labeled "4".
        Stage 4:
        If the display is 1, press the button in the same position as you pressed in stage 1.
        If the display is 2, press the button in the first position.
        If the display is 3, press the button in the same position as you pressed in stage 2.
        If the display is 4, press the button in the same position as you pressed in stage 2.
        Stage 5:
        If the display is 1, press the button with the same label you pressed in stage 1.
        If the display is 2, press the button with the same label you pressed in stage 2.
        If the display is 3, press the button with the same label you pressed in stage 4.
        If the display is 4, press the button with the same label you pressed in stage 3.
        </p>
       </div>
    )
  }
}