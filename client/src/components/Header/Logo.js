import React from 'react';
import { connect } from 'react-redux';
// import {} from './../redux/actions';
import LogoImg from '../../assets/logo1.svg';
import './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <div className="brand d-flex flex-row">
        <img className="mr-2" alt="logo" src={LogoImg} />
        <h1 className="logo-name mb-0 d-flex flex-row align-items-center font-weight-light">Course Watch</h1>
      </div>
    );
  }
}

const stateToProps = (state) => ({

});

export default connect(stateToProps, {})(Logo);
