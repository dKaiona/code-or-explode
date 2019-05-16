import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Success from '../Success/Success';

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
      <div className="deskPageContainer">
        { success ?
          <Success />
          :
          null
        }
         <h1>Desk page</h1>
        <Link to="/bomb-frame">
          <button>Bomb</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    )
  }
}