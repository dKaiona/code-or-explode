import React, { Component } from 'react';
import './InfoTech.css';
import Instructions from '../Instructions/Instructions';
import CodeEditor from '../CodeEditor/CodeEditor';

class InfoTech extends Component {

    pushHome () {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="infoTechPage">
                <CodeEditor />
                <Instructions />
            </div>
        )
    }
}

export default InfoTech