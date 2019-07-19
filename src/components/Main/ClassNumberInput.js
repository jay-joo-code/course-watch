import React from 'react';
import { connect } from 'react-redux';
//import {} from './../redux/actions';
import './ClassNumberInput.css';

class ClassNumberInput extends React.Component {
    handleFormSubmit(e) {
        e.preventDefault();
        console.log('form submit handle')
    }

    render() {
        return (
            <div className="pt-5 pb-5 ">
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="form-group d-flex flex-row">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Course ID" />
                        <button type="submit" className="btn btn-danger">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(ClassNumberInput)
