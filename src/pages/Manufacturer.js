import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../actions/test';

import '../assets/css/manufacturer.css';

import DirectionMap from './DirectionMap';
import BaseMap from './BaseMap';

class Manufacturer extends Component {
    state = { map: null };

    componentDidMount() {
        this.props.plsHelpMe();
    }
    showMap() {
        this.setState({map: null});
    }
    displayMap() {
        if(this.state.map) {
            return( <DirectionMap className="map-section" /> );
        }else{
            return( <BaseMap className="map-section" /> );
        }
    }

    render() {
        return (
            <div className="manufacturer-bg">
                
                <div className="splash-sticker">
                    <div className="manufactuer-section" onClick={() => this.showMap()}>
                        <div className="manufacturer-header card card-panel">
                        </div>
                    </div>
                </div>

                { this.displayMap() }

            </div>
        )
    }
}

// export default Account;
function mapStateToProps(state) {
    console.log(state.test.test);
    return {
        test: state.test.test
    }
  }
  export default connect(mapStateToProps, actions)(Manufacturer);