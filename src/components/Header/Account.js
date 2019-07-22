import React from 'react';
import { connect } from 'react-redux';
import { attemptGoogleSignIn, attemptGoogleSignOut, clearWatches } from './../../redux/actions';
//import firebase from './../../redux/firebase';

class Account extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    
    handleSignOut() {
        this.props.attemptGoogleSignOut();
        this.props.clearWatches();
    }
    
    render() {
        if (!this.props.user) {
            return <button className="btn btn-primary" onClick={this.props.attemptGoogleSignIn}>Sign In with Google</button>
        }
        return (
            <div>
            <button className="btn btn-danger" onClick={this.handleSignOut}>Sign Out</button>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(stateToProps, { attemptGoogleSignIn, attemptGoogleSignOut, clearWatches })(Account)
