import React from 'react';
import { connect } from 'react-redux';
import { removeWatch } from './../../redux/actions';

class Watch extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        if (this.props.user && this.props.user.user) {
            const email = this.props.user.user.email;
            const netID = email.substring(0, email.indexOf("@"));
            this.props.removeWatch(netID, this.props.classNumber);
        }
        
    }

    render() {
        const { watchers, available, classNumber, section, subjectCode, title, type } = this.props;

        return (
            <div className="card">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            availability {available}
                        </div>
                        <div className="col-8">
                            {classNumber} {subjectCode} {type} {section}
                            {title}
                        </div>
                        <div className="col-2">
                            <p>{watchers}</p>
                            <button className="btn btn-danger" onClick={this.handleRemove}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(stateToProps, { removeWatch })(Watch)
