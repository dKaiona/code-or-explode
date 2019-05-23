import React, { Component } from 'react'

export default class ButtonsInstructions extends Component {
  render() {
    return (
      <div>
         <p> On the Subject of the Button </p>

        {/* <p>
            See Appendix A for indicator identification reference.
            <br></br>
            See Appendix B for battery identification reference.
        </p> */}

        <p>
            Follow these rules in the order they are listed. Perform the first action that applies:
        </p>

        <p>
            If the button is blue and the button says “Abort”, and the output of your function is 0 hold the button and refer to “Releasing a Held Button”.
            <br></br>
            If there is more than 1 battery on the bomb and the button says “Detonate” and the output of you function is ?, press and immediately release the button.
            <br></br>
            If the button is white and there is a lit indicator with label GIT and the output of your function is ?, hold the button and refer to “Releasing a Held Button”.
            <br></br>
            If there are more than 2 batteries on the bomb and there is a lit indicator with label CSS and the output of your function is ?, press and immediately release the button.
            <br></br>
            If the button is yellow and the output of your function is ?, hold the button and refer to “Releasing a Held Button”.
            <br></br>
            If the button is red and the button says “Hold” and the output of your function is ?, press and immediately release the button.
            <br></br>
            If the button is red and flashing press it 3 times.
            <br></br>
            If none of the above apply, hold the button and refer to “Releasing a Held Button”.
        </p>

        <p>
            Releasing a Held Button
        </p>

        <p>
            If you start holding the button down, a colored strip will light up on the right side of the module. Based on its color you must release the button at a specific point in time:
        </p>

        <p>
            Blue strip: release when the countdown timer has a 4 in any position.
            <br></br>
            White strip: release when the countdown timer has a 1 in any position.
            <br></br>
            Yellow strip: release when the countdown timer has a 5 in any position.
            <br></br>
            Any other color strip: release when the countdown timer has a 1 in any position.
        </p>

      </div>
    )
  }
}
