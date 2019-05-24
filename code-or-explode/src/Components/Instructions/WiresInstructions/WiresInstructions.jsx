import React, { Component } from 'react'

import './WiresInstructions.css'

export default class WiresInstructions extends Component {
  render() {
    return (
      <div className="textBlock">
        <p> On the Subject of Wires </p>

        <p>
            A wire module can have 3-6 wires on it.
            <br></br>
            Only the one  correct wire needs to be cut to disarm the module.
            <br></br>
            Wire ordering begins with the first on the top.
        </p>

        <p>
            3 wires:
            <br></br>
            If there are no red wires, your key is Alpha. Complete the given toy problem.
            <br></br>
            Otherwise, if the last wire is white, your key is Bravo. Complete the given toy problem.
            <br></br>
            Otherwise, if there is more than one blue wire, your key is Charlie. Complete the given toy problem.
        </p>

        <p>
            4 wires:
            <br></br>
            <span>If there is more than one red wire and the last digit of the serial number is odd, your key is Delta. Complete the given toy problem. </span>
            <br></br>
            Otherwise, if the last wire is yellow and there are no red wires, your key is Echo. Complete the given toy problem.
            <br></br>
            Otherwise, if there is exactly one blue wire, your key is Foxtrot. Complete the given toy problem.
            <br></br>
            Otherwise, if there is more than one yellow wire, your key is Golf. Complete the given toy problem.
            <br></br>
            Otherwise, your key is Hotel. Complete the given toy problem.
        </p>

        <p>
            5 wires:
            <br></br>
            If the last wire is black and the last digit of the serial number is odd, your key is India. Complete the given toy problem.
            <br></br>
            Otherwise, if there is exactly on red wire and there is more than one yellow wire, your key is Juliett. Complete the given toy problem.
            <br></br>
            Otherwise, if there are no black wires, your key is Kilo. Complete the given toy problem.
            <br></br>
            Otherwise, your key is Lima. Complete the given toy problem.
        </p>

        <p>
            6 wires:
            <br></br>
            If there are no yellow wires and the last digit of the serial number is odd, your key is Mike. Complete the given toy problem.
            <br></br>
            Otherwise, if there is exactly one yellow wire and there is more than one white wire, your key is November. Complete the given toy problem.
            <br></br>
            Otherwise, if there are no red wires, your key is Oscar. Complete the given toy problem.
            <br></br>
            Otherwise, your key is Papa. Complete the given toy problem.
        </p>

      </div>
    )
  }
}
