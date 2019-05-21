import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Success.css'

class Success extends Component {

    render () {
        return (
            <div className="backgroundContainer">
                <div className="successContainer">
                    <div className="rainbow"></div>
                    <p> You and your Bomb Squad have succesfully diffused the bomb.</p>
                    <div className="linksContainer">
                    <Link to="/">
                        <div className="background">
                            <div className="link"> Back To Home </div> 
                        </div>
                    </Link>
                    <Link to="/desk">
                        <div className="background">
                            <div className="link"> Play Again? </div> 
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Success