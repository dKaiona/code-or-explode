import React, { Component } from 'react'
import KeypadIns from '../Instructions/KeypadInstructions/KeypadInstructions'
import './Instructions.css'

class Instructions extends Component {
    constructor () {
        super ()

        this.state = {
            wires: false,
            buttons: false,
            memory: false,
            yeet1: false,
            yeet2: false,
            yeet3: false,
            showInstructions: false
        }
    }

    show (name) {
        this.setState({ 
            [name]: !this.state[name],
            showInstructions: !this.state.showInstructions
        })
    }

    closeInstructions () {
        this.setState({
            wires: false,
            buttons: false,
            memory: false,
            yeet1: false,
            yeet2: false,
            yeet3: false,
            showInstructions: false
        })
    }

    

    render () {
        const { wires, buttons, memory, yeet1, yeet2, yeet3, showInstructions } = this.state
        return (
            <div className="instructionsBackgroundContainer">
                <div className="bombModulesInstructionsContainer">
                    <h1> Bomb Module Instructions </h1>
                    {   showInstructions ? 
                        <div className="buttonsToInstructions">
                            {   wires ? 
                            <div className={ wires ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
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
                                    Otherwise, if there is exactly one blue wire, cut the first wire.
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
                            </div>
                            : 
                            null
                            }
                            {   buttons ? 
                            <div className={ buttons ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                <p> On the Subject of the Button </p>

                                <p>
                                    See Appendix A for indicator identification reference.
                                    <br></br>
                                    See Appendix B for battery identification reference.
                                </p>

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
                            </div>
                            : 
                            null
                            }
                            {   memory ? 
                            <div className={ memory ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                <p> On the Subject of Memory. </p>                        
            

                                <p>
                                    Press the correct button to progress the module to the next stage. Complete all the stages to disarm the module.
                                    Pressing an incorrect button will earn you a strike
                                    Button positions are ordered from left to right.
                                </p>
                                
                                
                                <p>
                                    Stage 1:
                                    <br></br>
                                    If the display is 1, press the button in the second position.
                                    <br></br>
                                    If the display is 2, press the button in the second position.
                                    <br></br>
                                    If the display is 3, press the button in the third position.
                                    <br></br>
                                    If the display is 4, press the button in the fourth position.
                                </p>
                                
                                <p>
                                    Stage 2:
                                    <br></br>
                                    If the display is 1, press the button in the second position.
                                    <br></br>
                                    If the display is 2, press the button in the second position.
                                    <br></br>
                                    If the display is 3, press the button in the first position.
                                    <br></br>
                                    If the display is 4, press the button in the same position as you pressed in stage 1.
                                </p>
                                
                                <p>
                                    Stage 3:
                                    <br></br>
                                    If the display is 1, press the button with the same label you pressed in stage 2.
                                    <br></br>
                                    If the display is 2, press the button with the same label you pressed in stage 1.
                                    <br></br>
                                    If the display is 3, press the button in the third position.
                                    <br></br>
                                    If the display is 4, press the button labeled “4”.
                                </p>
                                
                                <p>
                                    Stage 4:
                                    <br></br>
                                    If the display is 1, press the button in the same position as you pressed in stage 1.
                                    <br></br>
                                    If the display is 2, press the button in the first position.
                                    <br></br>
                                    If the display is 3, press the button in the same position as you pressed in stage 2.
                                    <br></br>
                                    If the display is 4, press the button in the same position as you pressed in stage 2.
                                </p>

                                <p>
                                    Stage 5:
                                    <br></br>
                                    If the display is 1, press the button with the same label you pressed in stage 1.
                                    <br></br>
                                    If the display is 2, press the button with the same label you pressed in stage 2.
                                    <br></br>
                                    If the display is 3, press the button with the same label you pressed in stage 4.
                                    <br></br>
                                    If the display is 4, press the button with the same label you pressed in stage 3.
                                </p>
                                
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   yeet1 ? 
                            <div className={ yeet1 ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    <KeypadIns/>
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   yeet2 ? 
                            <div className={ yeet2 ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    Just Yeet it twice
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   yeet3 ? 
                            <div className={ yeet3 ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    Just Yeet it 3 times
                                </div>
                            </div>
                            : 
                            null
                            }
                        </div>
                        :
                        <div className="buttonsToInstructions">
                            <section className="row1">

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="wires"> Wires </button>
                                </div>

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="buttons"> Buttons </button>
                                </div>

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="memory"> Memory </button>
                                </div>

                            </section>

                            <section className="row2">

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="yeet1">Keypad</button>
                                </div>

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="yeet2"> Yeet 2 </button>
                                </div>

                                <div className="buttonContainer">
                                    <button onClick={(e) => this.show(e.target.name)} name="yeet3"> Yeet3 </button>
                                </div>

                            </section>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Instructions