import React from 'react';
import { connect } from 'react-redux';
import { updateDevice } from '../redux/actions';

class DetectDevice extends React.Component {
  constructor(props) {
    super(props);

    this.detectDevice = this.detectDevice.bind(this);
  }

  detectDevice() {
    const width = document.getElementById('root').clientWidth;
    this.props.updateDevice(width);
  }

  render() {
    this.detectDevice();

    return (
      <div />
    );
  }
}

const stateToProps = (state) => ({

});

export default connect(stateToProps, { updateDevice })(DetectDevice);
