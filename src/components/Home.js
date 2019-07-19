import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Counter from './Counter';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Counter />
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Home)