import { combineReducers } from 'redux';

const user = (state = null, action) => {
    console.log('reducer user')
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

export default combineReducers({
    user,
    device,
})
