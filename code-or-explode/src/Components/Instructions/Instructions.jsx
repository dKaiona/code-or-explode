import React, { Component } from 'react'
import './Instructions.css'
import WiresInstructions from './WiresInstructions/WiresInstructions'
import ButtonsInstructions from './ButtonsInstructions/ButtonsInstructions';
import KeypadIns from '../Instructions/KeypadInstructions/KeypadInstructions'
import MemoryInstructions from './MemoryInstructions/MemoryInstructions';

class Instructions extends Component {
    constructor () {
        super ()

        this.state = {
            wires: false,
            buttons: false,
            memory: false,
            keypad: false,
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
            keypad: false,
            yeet2: false,
            yeet3: false,
            showInstructions: false
        })
    }

    

    render () {
        const { wires, buttons, memory, keypad, yeet2, yeet3, showInstructions } = this.state
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
                                    <WiresInstructions />
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   buttons ? 
                            <div className={ buttons ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    <ButtonsInstructions />
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   memory ? 
                            <div className={ memory ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    <MemoryInstructions />
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   
                                keypad ? 
                            <div className={ 
                                keypad ? "moduleInstructions open" : "moduleInstructions"}>
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
                                    Your key is Key.
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   yeet3 ? 
                            <div className={ yeet3 ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    Your key is Key.
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
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="wires"
                                    > 
                                    Wires 
                                    </button>
                                </div>

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="buttons"
                                    > 
                                    Buttons 
                                    </button>
                                </div>

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => 
                                    this.show(e.target.name)} 
                                    name="memory"> 
                                    Memory 
                                    </button>
                                </div>

                            </section>

                            <section className="row2">

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="keypad"
                                    > 
                                    Keypad 
                                    </button>
                                </div>

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="yeet2"
                                    > 
                                    Yeet 2 
                                    </button>
                                </div>

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="yeet3"
                                    > 
                                    Yeet3 
                                    </button>
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