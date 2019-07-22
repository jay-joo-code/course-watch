import React from 'react';
import { connect } from 'react-redux';
import { fetchWatches } from './../../redux/actions';
import Watch from './Watch';

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
        const user = this.props.user;
        
        return (
            <div>
            
            {this.props.watches.watching.map((watch) => {
                return <Watch key={watch.classNumber} {...watch} />
            })}
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
