import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import '../assets/css/home.css';
import splashHero from '../assets/images/splashHero.png';

class Home extends Component {

  render() {
    return (
      <div className="home-page">

        {/* splash img */}
        <div className="home-background-color">
            <div className="row">
                <div className="col s12 m12 home-splash-block">
                    <img src={splashHero} className="home-splash-img moveFromTopFade" onClick={() => this.scrollDown()} />
                </div>
            </div>
            <div className="row">
                <div className="col s2 m2" />
                <div className="col s8 m8">
                    <h1 className="main-title">EnRoute</h1>
                </div>
                <div className="col s2 m2" />
            </div>
        </div>

      </div>
    );
  }
};

export default Home;