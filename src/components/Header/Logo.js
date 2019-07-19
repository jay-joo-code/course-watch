import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';

class Logo extends React.Component {
    render() {
        return (
            <div>
            logo
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Logo)