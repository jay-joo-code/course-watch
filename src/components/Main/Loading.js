import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import './Loader.scss';

class Structure extends React.Component {
    
    render() {
        var displayCondition = 'bg-silver';
        if (this.props.isFetching) {
            displayCondition = 'bg-cornell';
        }
        var classText = `lds-circle`
        var classTextInner = `${displayCondition}`
        return (
            <div className={classText}>
            <div className={classTextInner}></div>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        isFetching: state.watches.isFetching
    }
}

export default connect(stateToProps, {})(Structure)