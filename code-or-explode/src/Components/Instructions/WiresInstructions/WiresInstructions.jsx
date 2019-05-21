import React, { Component } from 'react'

export default class WiresInstructions extends Component {
  render() {
    return (
      <div>
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
            If there are no red wires, cut the second wire.
            <br></br>
            Otherwise, if the last wire is white, cut the last wire.
            <br></br>
            Otherwise, if there is more than one blue wire, cut the last blue wire.
        </p>

        <p>
            4 wires:
            <br></br>
            If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.
            <br></br>
            Otherwise, if the last wire is yellow and there are no red wires, cut the first wire.
            <br></br>
            Otherwise, if there is exactly one blue wire, your key is Foxtrot. Then, complete toy problem.
            <br></br>
            Otherwise, if there is more than one yellow wire, cut the last wire.
            <br></br>
            Otherwise, cut the second wire.
        </p>

        <p>
            5 wires:
            <br></br>
            If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
            <br></br>
            Otherwise, if there is exactly on red wire and there is more than one yellow wire, cut the first wire.
            <br></br>
            Otherwise, if there are no black wires, cut the second wire.
            <br></br>
            Otherwise, cut the first wire
        </p>

        <p>
            6 wires:
            <br></br>
            If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
            <br></br>
            Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire.
            <br></br>
            Otherwise, if there are no red wires, cut the last wire.
            <br></br>
            Otherwise, cut the fourth wire.
        </p>

      </div>
    )
  }
}
