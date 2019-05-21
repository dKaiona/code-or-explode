import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

import "./CodeEditor.css";

class CodeEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '// Enter a key to get a toy problem.',
            funcInput: '',
            funcOutPut: '',
            toyKey: ''
        }
    }

    populateEditor () {
        const { toyKey } = this.state
        switch (toyKey) {
            case "Foxtrot":
                this.setState({
                    code: '// Using the passed in params create a function that returns a greeting. \n\nFunction greeting (str1, str2) {\n\t// Your Code Here \n}'
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
        console.log(this.state.toyKey)
    }

    inputHandler = newValue => {
        this.setState({
            code: newValue,
            funcInput: newValue,
            checkCode: false
        })
    }

    onClickHandler = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                funcOutPut: eval(`${this.state.funcInput} sum(4,6)`)
            })
        } 
        catch (error) {
            this.setState({
                funcOutPut: "Function not valid"
            })
        }
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    onChange = newValue => {
        this.inputHandler(newValue)
    }

    render() {
        const { code, toyKey } = this.state
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
                    <button className="submitCode" onClick={() => this.onClickHandler()}> Submit </button>
                    <h1> {this.state.funcOutPut} </h1>
                </div>
            </div>
        )
    }
}

render(<CodeEditor />, document.getElementById("root"));

export default CodeEditor
