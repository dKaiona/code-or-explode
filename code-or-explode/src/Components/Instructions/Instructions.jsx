import React, { Component } from 'react'
import './Instructions.css'
import WiresInstructions from './WiresInstructions/WiresInstructions'
import ButtonsInstructions from './ButtonsInstructions/ButtonsInstructions';
import KeypadIns from '../Instructions/KeypadInstructions/KeypadInstructions'
import MemoryInstructions from './MemoryInstructions/MemoryInstructions';
import MazeInstructions from './MazeInstructions/MazeInstructions'
import SimonSaysInstructions from './SimonSaysInstructions/SimonSaysInstructions';

class Instructions extends Component {
    constructor () {
        super ()

        this.state = {
            wires: false,
            buttons: false,
            memory: false,
            keypad: false,
            simonSays: false,
            maze: false,
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
            simonSays: false,
            maze: false,
            showInstructions: false
        })
    }

    

    render () {
        const { wires, buttons, memory, keypad, simonSays, maze, showInstructions } = this.state
        return (
            <div className="instructionsBackgroundContainer">
                <div className="bombModulesInstructionsContainer">
                    <h1> Bomb Module Instructions </h1>
                    <h3> ( If the Code Editor has a white background refresh the page )</h3>
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
                            {   simonSays ? 
                            <div className={ simonSays ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    <SimonSaysInstructions />
                                </div>
                            </div>
                            : 
                            null
                            }
                            {   maze ? 
                            <div className={ maze ? "moduleInstructions open" : "moduleInstructions"}>
                                <button onClick={() => this.closeInstructions()}> &#10006; </button>
                                <div className="instructionsContainer">
                                    <MazeInstructions />
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
                                    name="simonSays"
                                    > 
                                    Simon Says
                                    </button>
                                </div>

                                <div className="buttonContainer">
                                    <button 
                                    onClick={(e) => this.show(e.target.name)} 
                                    name="maze"
                                    > 
                                    Maze
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