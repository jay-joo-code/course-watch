import React from 'react';
import { connect } from 'react-redux';
import { removeWatch } from './../../redux/actions';
import './Watch.scss';

class Watch extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        if (this.props.user && this.props.user.user) {
            const email = this.props.user.user.email;
            const netID = email.substring(0, email.indexOf("@"));
            this.props.removeWatch(netID, this.props.classNumber);
        }
        
    }

    render() {
        const { watchers, available, classNumber, section, subjectCode, title, type } = this.props;
        const watchNumber = watchers.length;
        var iconColor;
        if (available) {
            iconColor = "icon-available"
        } else {
            iconColor = "icon-unavailable"
        }
        
        const iconAvailabilityClass = `icon-availability ${iconColor}`;
        
        return (
            <div className="border-modern-shallow m-2 bg-white container-watch d-flex flex-row align-items-center" onClick={this.handleRemove}>
                <div className="container-fluid v-100 h-100">
                    <div className="row h-100">
                        <div className="col-1 d-flex justify-content-center align-items-center p-0">
                            <span className={iconAvailabilityClass} ></span>
                        </div>
                        <div className="col-9 d-flex flex-column justify-content-center section-class-description">
                            <p className="mb-0 class-description"><span className="color-cornell font-weight-normal">{classNumber}</span> {subjectCode} {type} {section}</p>
                            <p className="mb-0 text-muted class-description">{title}</p>
                        </div>
                        <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                            <span className="d-flex flex-row align-items-center justify-content-center"><i className="fas fa-eye mr-1 text-muted"></i><p className="watch-number mb-0 font-weight-normal">{watchNumber}</p></span>
                            
                        </div>
                    </div>
                </div>
                    <div className="danger-area h-100"></div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(stateToProps, { removeWatch })(Watch)
