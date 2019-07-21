import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';

class Watch extends React.Component {
    render() {
        const {watchers, available, classNumber, section, subjectCode, title, type} = this.props;
        
        return (
            <div className="card">
                <p>{classNumber}</p>
            </div>
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Watch)