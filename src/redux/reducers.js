import {combineReducers} from 'redux';

const user = (state = null, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const count = (state = 0, action) => {
    switch (action.type) {
        case "UPDATE_COUNT":
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

export default combineReducers({
    user,
    count,
    device,
})