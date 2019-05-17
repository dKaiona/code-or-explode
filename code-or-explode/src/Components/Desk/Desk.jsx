import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/bomb-frame">
          <button>Bomb</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <div className='backWallTop'>
        
        </div>
        <div className="deskWrapper">
         <svg width="830"  viewBox="0 0 1156 751" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1055 467H1064L1092 678H1055V467Z" fill="#C4C4C4"/>
         <rect x="438" y="467" width="401" height="128" fill="url(#paint0_linear)"/>
         <path d="M853 468H1023L1057.5 678H818.5L853 468Z" fill="url(#paint1_linear)"/>
         <path d="M76 415.5H75.5V416V709V709.5H76H438H438.5V709V416V415.5H438H76Z" fill="#C4C4C4" stroke="#323232"/>
         <path d="M808.618 460L818 468V680H789L808.618 460Z" fill="#C4C4C4"/>
         <rect x="78.5" y="422.5" width="983" height="43" fill="#C4C4C4" stroke="#B1B1B1" stroke-width="5"/>
         <path d="M818 468H862.5L848.5 542.5L825 675L818 680V468Z" fill="black"/>
         <path d="M1054.5 468H1010L1024 542.5L1047 680H1054.5V468Z" fill="black"/>
         <path d="M777.617 670.962C776.309 666.482 779.669 662 784.336 662H1092.38C1096.82 662 1100.14 666.088 1099.23 670.438L1090 714.438C1089.32 717.679 1086.46 720 1083.14 720H797.183C794.073 720 791.336 717.948 790.464 714.962L777.617 670.962Z" fill="#EAD3A6"/>
         <path d="M862 469H1010L1020.5 525L1000 515.5L972 510.5H894L868.5 515.5L851.5 525L862 469Z" fill="#020202" fill-opacity="0.67"/>
         <path d="M266.32 35.0461C273.477 25.2464 284.787 19.336 296.918 19.0565L884.467 5.51487C898.304 5.19594 911.275 12.2354 918.547 24.0121L1118.26 347.4C1122.33 353.984 1124.34 361.629 1124.05 369.363L1122.92 399.384C1122.13 420.371 1104.86 436.962 1083.86 436.913L75.0124 434.587C54.0631 434.538 36.8944 417.948 36.1285 397.012L34.9942 366.009C34.6741 357.258 37.3081 348.655 42.4721 341.583L266.32 35.0461Z" fill="#D2B98A"/>
         <path d="M264.442 16.7337C271.732 6.25055 283.692 0 296.461 0H578H882.441C895.788 0 908.208 6.82524 915.363 18.092L1117.95 337.092C1134.44 363.057 1115.79 397 1085.03 397H74.6243C43.1272 397 24.6227 361.593 42.6053 335.734L264.442 16.7337Z" fill="#EAD3A6"/>
         <path d="M102.5 488.5H409.5V607.5H102.5V488.5Z" fill="#C4C4C4" stroke="#B1B1B1"/>
         <path d="M102.5 631.5H409.5V708.5H102.5V631.5Z" fill="#C4C4C4" stroke="#B1B1B1"/>
         <path d="M213 531H229V548H213V531Z" fill="#909090"/>
         <path d="M213 675H229V692H213V675Z" fill="#909090"/>
         <path d="M282 675H298V692H282V675Z" fill="#909090"/>
         <path d="M895 684H911V701H895V684Z" fill="#909090"/>
         <path d="M964 684H980V701H964V684Z" fill="#909090"/>
         <path d="M282 531H298V548H282V531Z" fill="#909090"/>
         <rect x="213" y="548" width="85" height="14" fill="#909090"/>
         <rect x="213" y="691" width="85" height="14" fill="#909090"/>
         <rect x="895" y="698" width="85" height="14" fill="#909090"/>
         <defs>
         <linearGradient id="paint0_linear" x1="638.5" y1="467" x2="639" y2="726.5" gradientUnits="userSpaceOnUse">
         <stop stop-color="#727272"/>
         <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
         </linearGradient>
         <linearGradient id="paint1_linear" x1="938" y1="289" x2="938" y2="666" gradientUnits="userSpaceOnUse">
         <stop stop-color="#232323"/>
         <stop offset="1" stop-color="#1D1D1D" stop-opacity="0.23"/>
         </linearGradient>
         </defs>
         </svg>
       </div>
       
        <div class="container">
  </div>
  </div>
    )
  }
}
