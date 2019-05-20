import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

import "./CodeEditor.css";

class CodeEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: 'function sum (num1, num2) {\n\t // Your Code Here \n}',
            funcInput: "",
            funcOutPut: ""
        }
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
        const { code } = this.state
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
