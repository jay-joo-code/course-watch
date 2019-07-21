import React from 'react';
import { connect } from 'react-redux';
import { setError, addWatch } from './../../redux/actions';
import './ClassNumberInput.css';

class ClassNumberInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.setError("");
        //console.log(`attempt submit: ${this.state.inputValue}`)

        if (isNaN(this.state.inputValue)) {
            //console.log('error: not a number')
            this.props.setError('Course ID must be a number')
        }
        else if (process.env.NODE_ENV == 'production' && !this.props.user) {
            this.props.setError('Sign In to watch courses')
        }
        else {
            //console.log(`adding ${this.state.inputValue} to watch`)
            this.props.addWatch('jj534', this.state.inputValue)
        }
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="pt-5 pb-5 ">
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="form-group d-flex flex-row">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Course ID" onChange={(e) => this.handleInputChange(e)} />
                        <button type="submit" className="btn btn-danger">Add</button>
                    </div>
                </form>
                <div>
                    <p className="text-danger">{this.props.error}</p>
                </div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        error: state.error,
        user: state.user
    }
}

export default connect(stateToProps, { setError, addWatch })(ClassNumberInput)
