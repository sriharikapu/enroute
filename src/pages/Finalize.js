import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Finalize extends Component {

    render() {
        return (
            <div className="row finalize-area">
                <div className="col s8 m8" />
                <div className="col s4 m4">
                    <div className="finalize-section">
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="finalize-block">
                                    <div className="finalize-start-icon fa fa-flag-o" />
                                    <div className="finalize-start-text">Irish Warehouse</div>
                                    <div className="finalize-end-icon fa fa-bullseye" />
                                    <div className="finalize-end-text">Trucking Center</div>
                                    <div className="finalize-go-icon fa fa-check-circle" />
                                    <Link to="/">
                                        <div className="finalize-go-btn">Send Shipment</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Finalize;
