import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

import "./CodeEditor.css";
import { async } from "q";

class CodeEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '// Enter a key to get a toy problem.',
            funcInput: '',
            funcOutPut: '',
            defaultResults: '',
            toyKey: '',
            funcCall: ''
        }
    }

    populateEditor () {
        const { toyKey } = this.state
        switch (toyKey) {

            // Wires - Military Alphabet Keys
            case "Alpha":
                this.setState({
                    code: '// Alpha',
                    funcCall: ''
                })
                break;

            case "Bravo":
                this.setState({
                    code: '// Bravo',
                    funcCall: ''
                })
                break;

            case "Charlie":
                this.setState({
                    code: '// Charlie',
                    funcCall: ''
                })
                break;

            case "Delta":
                this.setState({
                    code: '// Delta',
                    funcCall: ''
                })
                break;

            case "Echo":
                this.setState({
                    code: '// Echo',
                    funcCall: ''
                })
                break;

            case "Foxtrot":
                this.setState({
                    code: '// Finish the function so it will return the concatenation\n\// of 2 strings with a space between. \n\nfunction concat(str1, str2) {\n\t// Your Code Here \n}',
                    funcCall: 'concat("Cut The", "Red Wire")'
                })
                break;

            case "Golf":
                this.setState({
                    code: '// Golf',
                    funcCall: ''
                })
                break;

            case "Hotel":
                this.setState({
                    code: '// Hotel',
                    funcCall: ''
                })
                break;

            case "India":
                this.setState({
                    code: '// India',
                    funcCall: ''
                })
                break;

            case "Juliett":
                this.setState({
                    code: '// Juliett',
                    funcCall: ''
                })
                break;

            case "Kilo":
                this.setState({
                    code: '// Kilo',
                    funcCall: ''
                })
                break;

            case "Lima":
                this.setState({
                    code: '// Lima',
                    funcCall: ''
                })
                break;

            case "Mike":
                this.setState({
                    code: '// Mike',
                    funcCall: ''
                })
                break;

            case "November":
                this.setState({
                    code: '// November',
                    funcCall: ''
                })
                break;

            case "Oscar":
                this.setState({
                    code: '// Oscar',
                    funcCall: ''
                })
                break;

            // Keypad - Food Related Keys

            case "Apple":
                this.setState({
                    code: '// Inside the findCorrectTransportation function write an if/else statement that will return check the variable age and return the correct response according to the following criteria. If age is from 3 to 7 "tricycle". If age is from 8 to 15 "bicycle". If age is 16 or greater return "car". Use the if and else keywords in your final solution. The variable age will always be a number and be changed during testing.',
                    funcCall: ''
                })
                break;
            
            case "Butter Knife":
                this.setState({
                    code: '// Butter Knife',
                    funcCall: ''
                })
                break;

            case "Coke":
                this.setState({
                    code: '// Coke',
                    funcCall: ''
                })
                break;

            case "Dish":
                this.setState({
                    code: '// Dish',
                    funcCall: ''
                })
                break;

            case "Egg":
                this.setState({
                    code: '// Egg',
                    funcCall: ''
                })
                break;

            case "Fork":
                this.setState({
                    code: '// Fork',
                    funcCall: ''
                })
                break;

            case "Gazpacho":
                this.setState({
                    code: '// Gazpacho',
                    funcCall: ''
                })
                break;

            case "Key":
                this.setState({
                    code: '// Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet',
                    funcCall: 'yeet()'
                })
                break;

            default:
                this.setState({
                    code: '// Enter a key to get a toy problem.'
                })
                break;
        }
    }

    async keyHandler (value) {
        await this.setState({
            toyKey: value
        })
        this.populateEditor(value)
    }

    inputHandler = newValue => {
        this.setState({
            code: newValue,
            funcInput: newValue,
            checkCode: false
        })
    }

    runCode = async () => {
        try {
            await this.setState({
                // eslint-disable-next-line
                funcOutPut: eval(`${this.state.funcInput} ${this.state.funcCall}`)
            })
            this.codeChecker()
        } 
        catch (error) {
            await this.setState({
                funcOutPut: "Function not valid"
            })
            this.codeChecker()
        }
    }

    codeChecker () {
        const { funcOutPut } = this.state
        switch (funcOutPut) {
            case "Cut The Red Wire":
                this.setState({
                    defaultResults: "Cut The Red Wire"
                })
                break;
            
            case "Cut TheRed Wire":
                this.setState({
                    defaultResults: "Cut The Blue Wire"
                })
                break;

            case "Function not valid":
                this.setState({
                    defaultResults: "Function not valid"
                })
                break;

            default:
                this.setState({
                    defaultResults: "( Check Your Code )"
                })
                break;
        }
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    onChange = newValue => {
        this.inputHandler(newValue)
    }

    render() {
        const { code, toyKey, defaultResults } = this.state
        const options = {
        selectOnLineNumbers: true,
        autoClosingBrackets: "EditorAutoClosingStrategy",
        automaticLayout: true,
        wordWrap: "on",
        wrappingIndent: "same",
        minimap: {
            enabled: false
        },

    }

        return (
            <div className="editorWrapper">
                <div className="keyInputContainer">
                    <input className="keyInput" placeholder="Key" onChange={(e) => this.keyHandler(e.target.value)} value={toyKey}></input>
                </div>
                <MonacoEditor
                    height="70%"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
                <div className="results">
                    <button className="submitCode" onClick={() => this.runCode()}> Submit </button>
                    <h1> {defaultResults} </h1>
                </div>
            </div>
        )
    }
}

render(<CodeEditor />, document.getElementById("root"));

export default CodeEditor
