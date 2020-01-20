import { combineReducers } from 'redux';

const user = (state = null, action) => {
    //console.log('reducer user')
    switch (action.type) {
        case "UPDATE_USER":
            //console.log(action.payload)
            if (action.payload && !action.payload.user) {
                // login unsuccessful
                return null
            }
            else {
                return action.payload;
            }

        default:
            return state;
    }
}

const device = (state = "desktop", action) => {
    switch (action.type) {
        case "UPDATE_DEVICE":
            return action.payload;

        default:
            return state;
    }
}

const error = (state = "", action) => {
    switch (action.type) {
        case "SET_ERROR":
            return action.payload;

        case "ADD_WATCH":
            if (action.payload.response && action.payload.response.status === 500) {
                //console.log('error', action.payload.response.data)
                return action.payload.response.data
            }
            else {
                return state;
            }
            
        default:
            return state;
    }
}

const watches = (state = { isFetching: false, watching: [] }, action) => {
    switch (action.type) {
        case "REQUEST_WATCHES":
            return Object.assign({}, state, {
                isFetching: true
            });

        case "RECEIVE_WATCHES":
            //console.log('Receive watches', action.payload)
            var watching = [];
            if (action.payload && action.payload.data && action.payload.data.watching) {
                watching = action.payload.data.watching
            }
            return Object.assign({}, state, {
                isFetching: false,
                watching,
            })

        case "CLEAR_WATCHES":
            return Object.assign({}, state, {
                isFetching: false,
                watching: []
            })

        default:
            return state;
    }
}

export default combineReducers({
    user,
    device,
    error,
    watches,

})
