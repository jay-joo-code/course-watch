import React from 'react';
import { connect } from 'react-redux';
import { setError, addWatch } from './../../redux/actions';
import './ClassNumberInput.scss';

class ClassNumberInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        // reset error
        this.props.setError("");
        // reset input
        this.setState({ inputValue: "" });

        //console.log(`attempt submit: ${this.state.inputValue}`)

        if (isNaN(this.state.inputValue)) {
            // input not a number
            this.props.setError('Course ID must be a number')
        }
        else if (this.state.inputValue === "") {
            // input empty
            this.props.setError('Enter a Course ID to watch a course')
        }
        else if (!this.props.user) {
            // not logged in
            this.props.setError('Sign In to watch courses')
        }
        else {
            const user = this.props.user.user;
            const email = user.email;
            const netID = email.substring(0, email.indexOf('@'));
            
            // add watch
            this.props.addWatch(netID, this.state.inputValue)
        }
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="mt-5 mb-3 pt-5 pb-5 w-100 d-flex flex-column align-items-center">
                <form className="form-style" onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="form-group d-flex flex-row input-group border-modern-dynamic">
                        <input type="text" className="form-control input-style" id="exampleFormControlInput1" placeholder="Course ID" value={this.state.inputValue} onChange={(e) => this.handleInputChange(e)} />
                        <button type="submit" className="icon-add border-modern-shallow"><i className="fas fa-plus"></i></button>
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
