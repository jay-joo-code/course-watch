import React from 'react';
import { connect } from 'react-redux';
// import {} from './../redux/actions';
import Header from './Header/Header';
import Main from './Main/Main';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
}

const stateToProps = (state) => ({

});

export default connect(stateToProps, {})(Home);
