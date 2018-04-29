import React, { Component } from 'react';

import $ from 'jquery';

import SKUTable from '../components/SKUTable';

import '../assets/css/manufacturer.css';
import '../assets/css/supermarket.css';
import splashHeader from '../assets/images/splashHeader.png';

class Supermarket extends Component {
    
    componentDidMount() {
        $('.manufactuer-body-table').show();
    }

    render() {
        return (
            <div className="supermarket-bg">
                
                <div className="row">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                        <div className="supermaerket-section z-depth-3">

                            {/* supermarket header */}
                            <div className="row">
                                <div className="col s3 m3 clean-row">
                                    <div className="supermarket-header-left-tile" />
                                    <div className="supermarket-header-left-block">
                                        <img src={splashHeader} alt="" className="supermarket-headerimg" />
                                    </div>
                                </div>
                                <div className="col s9 m9 clean-row">
                                    <div className="supermarket-header-right-tile" />
                                    <div className="supermarket-header-right-block">
                                        <div className="supermarket-title-text">SuperMarket Company</div>
                                        <div className="supermarket-bot-text">Order Tracking System</div>
                                    </div>
                                </div>
                            </div>

                            {/* supermarket body */}
                            <div className="row">
                                <div className="col s3 m3 clean-row">
                                    <div className="supermarket-body-left-block">

                                    </div>
                                </div>
                                <div className="col s9 m9 clean-row">
                                    <div className="supermarket-body-right-block">

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

                                                <div className="row">
                                                    <div className="col s4 m4" />
                                                    <div className="col s4 m4">
                                                        <div className="sku-table-btn">Shipment Delivered</div>
                                                    </div>
                                                    <div className="col s4 m4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col s1 m1" />
                </div>

            </div>
        )
    }
}
export default Supermarket;