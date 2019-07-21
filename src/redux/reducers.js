import { combineReducers } from 'redux';

const user = (state = null, action) => {
    //console.log('reducer user')
    switch (action.type) {
        case "UPDATE_USER":
            console.log(action.payload)
            return action.payload;

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
            if (action.payload.response && action.payload.response.status == 500) {
                //console.log('error', action.payload.response.data)
                return action.payload.response.data
            }

        default:
            return state;
    }
}

const watches = (state = [], action) => {
    switch (action.type) {
        case "ADD_WATCH":
            //console.log(action.payload.response)
            if (action.payload.response && action.payload.response.status == 500) {
                //console.log('error', action.payload.response.data)
                return state
            }
            else if (action.payload.data && action.payload.data.data) {
                const newWatches = [...state];
                newWatches.push(action.payload.data.data)
                //console.log('newwatches', newWatches)
                return newWatches
            }
            return state;

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
