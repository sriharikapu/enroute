import React, { Component } from 'react';

import $ from 'jquery';

import '../assets/css/truck.css';
import '../assets/css/manufacturer.css';

import TruckMap from '../components/maps/TruckMap';
import SKUTable from '../components/SKUTable';

class Truck extends Component {

    state = { map: null };

    displayTime() {
        $(".truck-time-block").show()
        $(".truck-body-table").show();
        $(".truck-time-block").addClass("moveFromBottomFade");
        $(".truck-body-table").addClass("moveFromBottomFade delay100");
    }
    displayMap() {
        if(this.state.map) {
            return( <TruckMap className="map-section" /> );
        }else{
            return( <TruckMap className="map-section" /> );
        }
    }

    render() {
        return (
            <div className="truck-bg">

                <div className="splash-sticker moveFromTopFade">
                    <div className="truck-section">

                        {/* truck header */}
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card card-panel truck-block blue-grey darken-2 z-depth-3">
                                    <div className="truck-header-main-text">
                                    <div className="fa fa-truck truck-header-icon" />
                                    Freight Forwarder Trucking
                                    <div className="waves-effect waves-light btn truck-header-btn" onClick={() => this.displayTime()}>Load</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* truck time */}
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card card-panel truck-time-block blue-grey darken-2 z-depth-3">
                                    <div className="truck-time-main-text">Delivery Time</div>
                                    <div className="row">
                                        <div className="col s5 m5">
                                            <div className="truck-time-left-text">Pickup Time: 9:00 AM</div>
                                        </div>
                                        <div className="col s2 m2">
                                            <div className="fa fa-arrow-circle-o-right truck-time-icon" />
                                        </div>
                                        <div className="col s5 m5">
                                            <div className="truck-time-right-text">Delivered By: 5:00 PM</div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        {/* sku table */}
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="truck-body-table">
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
                                    <div className="sku-table-btn" onClick={() => this.showMap()}>Ready to Ship</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {this.displayMap()}

            </div>
        )
    }
}
export default Truck;