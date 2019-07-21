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

export const attemptGoogleSignIn = () => {
    console.log('action attemptGoogleSignIn')
    var provider = new firebase.auth.GoogleAuthProvider();
    const request = firebase.auth().signInWithPopup(provider);

    return {
        type: "UPDATE_USER",
        payload: request
    }
}

export const attemptGoogleSignOut = () => {
    firebase.auth().signOut();
    
    return {
        type: "UPDATE_USER",
        payload: null
    }
}

export const setError = (errorMsg) => {
    return {
        type: "SET_ERROR",
        payload: errorMsg
    }
}

export const addWatch = (netID, classNumber) => {
    const url = `https://coursealert-api.herokuapp.com/api/addWatch?apiKey=${apiKey}&classNumber=${classNumber}&netID=${netID}`
    const request = axios.get(url)
    
    return {
        type: "ADD_WATCH",
        payload: request
    }
}

