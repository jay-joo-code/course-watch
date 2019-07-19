import React from 'react';
import {connect} from 'react-redux';
import {updateCount} from './../redux/actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleZero = this.handleZero.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    
    handleIncrement() {
        const newCount = this.props.count + 1;
        this.props.updateCount(newCount);
    }
    
    handleZero() {
        this.props.updateCount(0);
    }
    
    handleDecrement() {
        const newCount = this.props.count -1;
        this.props.updateCount(newCount);
    }
    
    render() {
        return (
            <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
                <p>count: {this.props.count}</p>
                <button className="btn btn-primary mb-2" onClick={this.handleIncrement}>increment</button>
                <button className="btn btn-warning mb-2" onClick={this.handleDecrement}>decrement</button>
                <button className="btn btn-danger" onClick={this.handleZero}>zero</button>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(stateToProps, {updateCount})(Counter);