import React, { Component } from 'react';

class SKUTable extends Component {

    render() {
        return (
            <div className="row">
                <table className="col s12 m12">
                    <thead>
                        <tr>
                            <th><div className="sku-table-text-block">Item Name</div></th>
                            <th>SKU Number</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                            <tr>
                                <td><div className="fa fa-archive sku-table-box"></div>
                                Pickel-Deli-Fickle-Jelly</td>
                                <td>06089197800848622</td>
                                <td>$450.87</td>
                            </tr>
                            <tr>
                                <td><div className="fa fa-archive sku-table-box"></div>
                                Haber-Dapper-Black-Pepper</td>
                                <td>06089197800848622</td>
                                <td>$332.76</td>
                            </tr>
                            <tr>
                                <td><div className="fa fa-archive sku-table-box"></div>
                                Betty-Bomer-Butter</td>
                                <td>06089197800848622</td>
                                <td>$127.00</td>
                            </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}
export default SKUTable;