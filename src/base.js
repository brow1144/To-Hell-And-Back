// import firebase from 'firebase';
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDynm1iQEugqjNl9b4UoVD5ANFhdJ3uW3c",
  authDomain: "tohell-b7845.firebaseapp.com",
  databaseURL: "https://tohell-b7845.firebaseio.com",
  projectId: "tohell-b7845",
  storageBucket: "tohell-b7845.appspot.com",
  messagingSenderId: "568288665390"
});

export const db = firebase.firestore();

const settings = {timestampsInSnapshots: true};
db.settings(settings);

export default firebase;