import React, { Component } from 'react'

import './Success.css'

class Success extends Component {

    render () {
        return (
            <div className="backgroundContainer">
                <div className="successContainer">
                    <h1> Good Job! </h1>
                    <p> You and your Bomb Squad have succesfully diffused the bomb.</p>
                </div>
            </div>
        )
    }
}

export default Success