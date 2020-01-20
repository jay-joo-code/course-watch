import React from 'react';
import { connect } from 'react-redux';
import { setError, addWatch } from '../../redux/actions';
import './ClassNumberInput.scss';
import axios from 'axios';

class ClassNumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // reset error
    this.props.setError('');
    // reset input
    this.setState({ inputValue: '' });

    if (isNaN(this.state.inputValue)) {
      // input not a number
      this.props.setError('Course ID must be a number');
    } else if (this.state.inputValue === '') {
      // input empty
      this.props.setError('Enter a Course ID to watch a course');
    } else if (!this.props.user) {
      // not logged in
      this.props.setError('Sign In to watch courses');
    } else {
      const { user } = this.props.user;

      // TODO: passed validation, add to watch
      axios.post(`/api/user/${user.uid}/add-course`, { classNumber: this.state.inputValue })
        .then((res) => {
          const { version, setVersion } = this.props;
          setVersion(version + 1);
        })
        .catch((e) => {
          console.log('ERROR adding course', e.message);
          e.message && this.props.setError(e.message);
        });
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
            <button type="submit" className="icon-add border-modern-shallow"><i className="fas fa-plus" /></button>
          </div>
        </form>
        <div className="err-container">
          <p className="text-muted">Try 10791 as the Course ID!</p>
          <p className="text-danger">{this.props.error}</p>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => ({
  error: state.error,
  user: state.user,
});

export default connect(stateToProps, { setError, addWatch })(ClassNumberInput);
