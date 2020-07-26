import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyC3pSi_aA0AvQ6Fbm8qWcrJPKmLagdL_dE",
    authDomain: "vartalaap-46761.firebaseapp.com",
    databaseURL: "https://vartalaap-46761.firebaseio.com",
    projectId: "vartalaap-46761",
    storageBucket: "vartalaap-46761.appspot.com",
    messagingSenderId: "398678959334",
    appId: "1:398678959334:web:3bf2a26d9c6704698b4727",
    measurementId: "G-4S8D0CV6M9"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};