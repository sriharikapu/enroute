import React, { Component } from 'react';

import $ from 'jquery';

import {connect} from 'react-redux';
import * as actions from '../actions/test';

import '../assets/css/manufacturer.css';

import DirectionMap from './DirectionMap';
import BaseMap from './BaseMap';
import SKUTable from './SKUTable';

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
    displayCompany() {
        $( ".manufactuer-company-name" ).remove();
        $( ".manufactuer-body-table" ).addClass("moveFromTopFade");
        $( ".manufactuer-body-table" ).show();
    }

    render() {
        return (
            <div className="manufacturer-bg">
                
                <div className="splash-sticker">
                    <div className="manufactuer-section">

                        {/* sticky header */}
                        <div className="row">
                            <div className="col s8 m8 cyan darken-2">
                                <div className="manufactuer-header-left">
                                    <div className="manufacturer-header card card-panel">
                                        <div className="manufacturer-main-text">Manufacturer Company Location:
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4 m4 grey darken-2">
                                <div className="manufactuer-header-right">
                                    <div className="manufacturer-header card card-panel grey darken-3">
                                        <div className="manufacturer-btn">AreaCode: 020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sticky body */}
                        <div className="manufactuer-name-section">

                            <div className="manufactuer-company-name moveFromTopFade delay200">
                                <div className="row">
                                    <div className="col s8 m8 white z-depth-3">
                                        <div className="manufactuer-body-left">
                                            <div className="manufacturer-body">
                                                <div className="manufacturer-body-main-text">
                                                <a className="fa fa-building manufacturer-body-icon" />
                                                Irish-Whelsh Warehouse</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s4 m4 grey darken-1 z-depth-3">
                                        <div className="manufactuer-body-right">
                                            <div className="manufacturer-body">
                                                <div className="manufacturer-body-side-text" onClick={() => this.displayCompany()}>[ Confirm ]</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col s12 m12">
                                    <div className="manufactuer-body-table">
                                        <div className="manufactuer-body-table-header">
                                            <div className="manufactuer-body-table-text">
                                            <div className="fa fa-th-list manufactuer-body-icon" />
                                            Deilvary Order Inventory Information</div>
                                        </div> 
                                        <div className="manufactuer-body-table-panel card card-panel">
                                            <div className="manufactuer-body-table-panel-text">
                                            <div className="fa fa-inbox manufactuer-panel-icon" />
                                            Manufactuer Inventory Shipment Preview
                                        </div>
                                        </div>
                                        <SKUTable className="sku-table-section" />

                                        <div className="sku-table-btn">
                                            Ready to Ship
                                        </div>

                                    </div>
                                </div>
                            </div>

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