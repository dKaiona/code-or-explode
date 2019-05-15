import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

import "./CodeEditor.css";

class CodeEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: `function sum(num1, num2){\n\t (your code here ) \n}`,
      funcInput: "",
      funcOutPut: ""
    };
  }

  // return 2*5
  inputHandler = newValue => {
    this.setState({
      code: newValue,
      funcInput: newValue,
      checkCode: false
    });
  };

  onClickHandler = () => {
    try {
      this.setState({
        funcOutPut: eval(`${this.state.funcInput} sum(4,6)`)
      });
    } catch (error) {
      this.setState({
        funcOutPut: "Function not valid"
      });
    }
  };

  editorDidMount(editor, monaco) {
    editor.focus();
  }
  onChange = (newValue, e) => {
    this.inputHandler(newValue);
  };

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      autoClosingBrackets: "EditorAutoClosingStrategy",
      wrappingIndent: "same",
      tabCompletion: "on",
      showUnused: true,
      wordWrap: "on",
    };

    return (
      <div className="editorPage">
        <div>{"_"}</div>

        <MonacoEditor
          width="50%"
          height="80%"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />

        <button onClick={() => this.onClickHandler()}> submit code </button>

        <div className="resultsContainer">
          <h3>{this.state.funcOutPut}</h3>
        </div>
      </div>
    );
  }
}

render(<CodeEditor />, document.getElementById("root"));

export default CodeEditor;

