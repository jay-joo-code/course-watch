import React from 'react';
import { connect } from 'react-redux';
// import {} from './../redux/actions';
import Logo from './Logo';
import Account from './Account';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="container pt-5 ">
        <div className="d-flex flex-row justify-content-between container-header">
          <Logo />
          <Account />
        </div>
      </div>

    );
  }
}

const stateToProps = (state) => ({

});

export default connect(stateToProps, {})(Header);
