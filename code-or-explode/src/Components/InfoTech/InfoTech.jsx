import React, { Component } from 'react'

import './InfoTech.css'
import Instructions from '../Instructions/Instructions'
import CodeEditor from '../CodeEditor/CodeEditor';

class InfoTech extends Component {

    pushHome () {
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div className="infoTechPage">
            <div className="backToHome"> 
                <button className="holder" onClick={() => this.pushHome()}> &larr; </button>
            </div>
                <CodeEditor />
                <Instructions />
            </div>
        )
    }
}

export default InfoTech