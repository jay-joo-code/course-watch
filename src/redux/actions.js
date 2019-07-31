import firebase from './firebase';
import axios from 'axios';
const apiKey = 'bhgUdojxeHEXdFOU';

export const updateDevice = (width) => {
    //console.log('update device width:', width);
    var device;

    if (width > 992) {
        //console.log('desktop')
        device = 'desktop';
    }
    else if (width > 768) {
        //console.log('md')
        device = 'md';
    }
    else {
        //console.log('sm')
        device = 'sm';
    }

    return {
        type: "UPDATE_DEVICE",
        payload: device
    }
}

export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        payload: user
    }
}

export const attemptGoogleSignInWithPopup = () => {
    return dispatch => {
        var provider = new firebase.auth.GoogleAuthProvider();
        
        return firebase.auth().signInWithPopup(provider)
            .then((response) => {
                dispatch(updateUser(response))
                console.log('sign in attempt response', response)
                if (response && response.user) {
                    console.log('dispatch fetchWatches')
                    const email = response.user.email;
                    const netID = email.substring(0, email.indexOf("@"));
                    dispatch(fetchWatches(netID))
                }
            })
    }
}

export const attemptGoogleSignIn = () => {
    return dispatch => {

        return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
                dispatch(attemptGoogleSignInWithPopup())
            })

        
    }
}

export const attemptGoogleSignOut = () => {
    return dispatch => {
        return firebase.auth().signOut()
            .then(response => dispatch(updateUser(null)))
    }
}

export const setError = (errorMsg) => {
    return {
        type: "SET_ERROR",
        payload: errorMsg
    }
}

export const requestWatches = () => {
    return {
        type: "REQUEST_WATCHES",
        payload: null
    }
}

export const clearWatches = () => {
    return {
        type: "CLEAR_WATCHES",
        payload: null
    }
}

export const receiveWatches = (data) => {
    return {
        type: "RECEIVE_WATCHES",
        payload: data
    }
}

export const fetchWatches = (netID) => {
    return (dispatch) => {
        dispatch(requestWatches())

        const url = `https://coursealert-api.herokuapp.com/db/user?apiKey=${apiKey}&netID=${netID}`;

        return axios.get(url)
            .then((response) => {
                //console.log(response.data.watching[response.data.watching.length-1].available === null)
                if (response.data && response.data.watching.length > 0 && response.data.watching[response.data.watching.length - 1].available === null) {
                    dispatch(fetchWatches(netID))
                }
                else {
                    dispatch(receiveWatches(response))
                }
            })

    }
}

export const addWatch = (netID, classNumber) => {
    return (dispatch) => {
        const url = `https://coursealert-api.herokuapp.com/api/addWatch?apiKey=${apiKey}&classNumber=${classNumber}&netID=${netID}`;

        return axios.get(url)
            .then((response) => {
                dispatch(fetchWatches(netID))
            })
    }
}

export const removeWatch = (netID, classNumber) => {
    return (dispatch) => {
        dispatch(requestWatches())
        const url = `https://coursealert-api.herokuapp.com/api/removeWatch?apiKey=${apiKey}&classNumber=${classNumber}&netID=${netID}`;

        return axios.get(url)
            .then((response) => {
                dispatch(fetchWatches(netID))
            })
    }
}
