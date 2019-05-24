import React, { Component } from 'react'

export default class SimonSaysInstructions extends Component {
    render() {
        return (
            <div className="textBlock">
                On the Subject of Simon Says
                This is like one of those toys you played with as a kid where you have to match the
                pattern that appears, except this one is a knockoff that was probably purchased at
                a dollar store.
                1. One of the four colored buttons will flash.
                2. Using the correct table below, press the button with the
                corresponding color.
                3. The original button will flash, followed by another. Repeat this sequence
                in order using the color mapping.
                4. The sequence will lengthen by one each time you correctly enter a sequence
                until the module is disarmed.
                If the serial number contains a vowel:
                Red
                Flash
                Blue
                Flash
                Green
                Flash
                Yellow
                Flash
                Button to press:
                No Strikes Blue Red Yellow Green
                1 Strike Yellow Green Blue Red
                2 Strikes Green Red Yellow Blue
                If the serial number does not contain a vowel:
                Red
                Flash
                Blue
                Flash
                Green
                Flash
                Yellow
                Flash
                Button to press:
                No Strikes Blue Yellow Green Red
                1 Strike Red Blue Yellow Green
                2 Strikes Yellow Green Blue Red
            </div>
        )
    }
}
