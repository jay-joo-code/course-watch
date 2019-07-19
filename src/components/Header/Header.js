import React from 'react';
import {connect} from 'react-redux';
//import {} from './../redux/actions';
import Logo from './Logo';
import Account from './Account';

class Header extends React.Component {
    render() {
        return (
            <div className="container pt-5 pr-5 pl-5">
                <div className="d-flex flex-row justify-content-between">
                    <Logo />
                    <Account />
                </div>
            </div>
            
            )
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

export default connect(stateToProps, {})(Header)