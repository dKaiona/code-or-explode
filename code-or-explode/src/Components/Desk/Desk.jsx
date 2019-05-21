import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Success from '../Success/Success';
import  '../../Images/deskPage.svg'


import './Desk.css'

export default class Desk extends Component {
  constructor () {
    super ()

    this.state = {
      success: false
    }
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
