import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Desk.css'
import Success from '../Success/Success';

export default class Desk extends Component {
  constructor () {
    super ()

    this.state = {
      success: false,
      isLightOn: false
    }
  }

  toggleLight () {
    this.setState({
      isLightOn: !this.state.isLightOn
    })
  }

  render () {
    const { success } = this.state
    return (
      <div className="pageWrapper">
            <div className="deskPageContainer">
          { success ?
            <Success />
            :
            null
          }
          <Link to="/" className="linkToHome"></Link>
          <div className="deskContents">
            <Link to="/info-page" className="howToPlay"></Link>
            <Link to="/bomb-frame" className="linkToBomb"></Link>
            <Link to="/info-tech-page" className="linkToBombDefusal"></Link>
            <button className="toggleLight" onClick={() => this.toggleLight()}></button>
          </div>
        </div>
      </div>
    )
  }
}
