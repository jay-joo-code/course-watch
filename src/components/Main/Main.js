import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import ClassNumberInput from './ClassNumberInput'

class Main extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <ClassNumberInput />
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Main)