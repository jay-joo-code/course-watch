import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Watch from './Watch';

class Watches extends React.Component {
    render() {
        
        
        return (
            <div>
            {this.props.watches.map((watch) => {
                return <Watch key={watch.classNumber} {...watch} />
            })}
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        watches: state.watches
    }
}

export default connect(stateToProps, {})(Watches)