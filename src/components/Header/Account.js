import React from 'react';
import { connect } from 'react-redux';
import { attemptGoogleSignIn, attemptGoogleSignOut, clearWatches } from './../../redux/actions';
//import firebase from './../../redux/firebase';
import './Account.scss'
import Avatar from '@material-ui/core/Avatar';

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
            return (
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <button className="btn border-modern-shallow d-flex flex-row" onClick={this.props.attemptGoogleSignIn}>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        <p className="mb-0 ml-2">Sign In with Google</p>
                    </button>
                </div>
                
            )
        }
        const user = this.props.user.user;
        const photo = user.photoURL;
        const name = user.displayName;
        const email = user.email;
        
        return (
            <div className="d-flex flex-row align-items-center justify-content-center">
                <Avatar alt="Remy Sharp" src={photo} className="border-modern-dynamic mr-4 avatar" onClick={this.handleSignOut} />
                <div className="user-info-group">
                    <p className="mb-0 font-weight-light">{name}</p>
                    <p className="mb-0 font-weight-light text-muted">{email}</p>
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

export default connect(stateToProps, { attemptGoogleSignIn, attemptGoogleSignOut, clearWatches })(Account)
