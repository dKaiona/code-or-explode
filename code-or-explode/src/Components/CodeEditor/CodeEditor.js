import React, { Component } from 'react'
import { render } from 'react-dom'
import MonacoEditor from 'react-monaco-editor'

import './CodeEditor.css'

class CodeEditor extends Component {
     constructor(props) {
        super(props);

        this.state = {
            code: '',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
        <div className="editorPage">
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
            <div className="resultsContainer">
                <h3> results </h3>
            </div>
        </div>
    );
  }
}

render(
  <CodeEditor />,
  document.getElementById('root')
);


export default CodeEditor