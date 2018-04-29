import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <img src={splashHero} className="home-splash-img moveFromTopFade"/>
                </div>
            </div>
            <div className="row">
                <div className="col s2 m2" />
                <div className="col s8 m8">
                    <h1 className="main-title moveFromTopFade">EnRoute</h1>
                    <h3 className="side-title moveFromBottomFade delay100">The Smart Contract solution for Track and Trace on the Supply Chain</h3>
                </div>
                <div className="col s2 m2" />
            </div>
            <div className="row">
                <div className="col s4 m4" />
                <div className="col s4 m4">
                    <div className="track-btn-block moveFromBottomFade delay100">
                        <Link to="/manufacturer">
                            <div className="waves-effect waves-light btn-large purple lighten-1 track-btn">Start Tracking</div>
                        </Link>
                    </div>
                </div>
                <div className="col s4 m4" />
            </div>
        </div>

      </div>
    );
  }
};

export default Home;