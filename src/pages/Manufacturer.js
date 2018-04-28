import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../actions/test';

class Manufacturer extends Component {

    componentDidMount() {
        this.props.plsHelpMe();
    }

    render() {
        return (
            <div className="">
                <h1>Manufacturer Page</h1>
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