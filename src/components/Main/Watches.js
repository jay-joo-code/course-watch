import React from 'react';
import { connect } from 'react-redux';
import { fetchWatches } from './../../redux/actions';
import Watch from './Watch';
import Loading from './Loading';

class Watches extends React.Component {
    componentDidMount() {
        if (this.props.user && this.props.user.user) {
            // user currently logged in
            const email = this.props.user.user.email;
            const netID = email.substring(0, email.indexOf('@'))
            this.props.fetchWatches(netID);
        }
    }

    render() {

        return (
            <div className="w-100 ">
                <div className="d-flex flex-row justify-content-center">
                    <Loading />
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    {this.props.watches.watching.map((watch) => {
                        return <Watch key={watch.classNumber} {...watch} />
                    })}
                </div>
            </div>


        )
    }
}

const stateToProps = (state) => {
    return {
        watches: state.watches,
        user: state.user
    }
}

export default connect(stateToProps, { fetchWatches })(Watches)
