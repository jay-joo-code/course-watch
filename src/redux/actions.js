import firebase from './firebase';

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
    const request = firebase.auth().signOut();
    
    return {
        type: "UPDATE_USER",
        payload: null
    }
}
