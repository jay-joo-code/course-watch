import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import ClassNumberInput from './ClassNumberInput'
import Watches from './Watches';

class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid mb-5">
                <div className="d-flex flex-column align-items-center">
                    <ClassNumberInput />
                    <Watches />
                </div>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Main)