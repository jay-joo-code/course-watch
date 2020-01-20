import axios from 'axios';
import firebase from './firebase';

const apiKey = 'bhgUdojxeHEXdFOU';

export const updateDevice = (width) => {
  // console.log('update device width:', width);
  let device;

  if (width > 992) {
    // console.log('desktop')
    device = 'desktop';
  } else if (width > 768) {
    // console.log('md')
    device = 'md';
  } else {
    // console.log('sm')
    device = 'sm';
  }

  return {
    type: 'UPDATE_DEVICE',
    payload: device,
  };
};

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  payload: user,
});

export const attemptGoogleSignInWithPopup = () => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((response) => {
      dispatch(updateUser(response));
    });
};

export const attemptGoogleSignIn = () => (dispatch) => firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    dispatch(attemptGoogleSignInWithPopup());
  });

export const attemptGoogleSignOut = () => (dispatch) => firebase.auth().signOut()
  .then((response) => dispatch(updateUser(null)));

export const setError = (errorMsg) => ({
  type: 'SET_ERROR',
  payload: errorMsg,
});

export const requestWatches = () => ({
  type: 'REQUEST_WATCHES',
  payload: null,
});

export const clearWatches = () => ({
  type: 'CLEAR_WATCHES',
  payload: null,
});

export const receiveWatches = (data) => ({
  type: 'RECEIVE_WATCHES',
  payload: data,
});

export const fetchWatches = (netID) => (dispatch) => {
  dispatch(requestWatches());

  const url = `https://coursealert-api.herokuapp.com/db/user?apiKey=${apiKey}&netID=${netID}`;

  return axios.get(url)
    .then((response) => {
      /* Update redux state with received watch data */
      dispatch(receiveWatches(response));


      // console.log(response.data)
      // console.log(response.data.watching[response.data.watching.length-1])

      // console.log(response.data.watching[response.data.watching.length-1].available === null)
      /* if (response.data && response.data.watching.length > 0 && response.data.watching[response.data.watching.length - 1].available === null) {
                    dispatch(fetchWatches(netID))
                }
                else {
                    dispatch(receiveWatches(response))
                } */
    });
};

export const addWatch = (netID, classNumber) => (dispatch) => {
  const url = `https://coursealert-api.herokuapp.com/api/addWatch?apiKey=${apiKey}&classNumber=${classNumber}&netID=${netID}`;

  return axios.get(url)
    .then((response) => {
      dispatch(fetchWatches(netID));
    });
};

export const removeWatch = (netID, classNumber) => (dispatch) => {
  dispatch(requestWatches());
  const url = `https://coursealert-api.herokuapp.com/api/removeWatch?apiKey=${apiKey}&classNumber=${classNumber}&netID=${netID}`;

  return axios.get(url)
    .then((response) => {
      dispatch(fetchWatches(netID));
    });
};
