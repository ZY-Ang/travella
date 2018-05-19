/**
 * Configuration for firebase and firebase instantiation.
 */

import firebase from 'firebase';

/** 1. Config parameters retrieved from firebase console at
 * {@link https://auto-i-b231b.firebaseio.com} */
const config = {
    apiKey: "AIzaSyAQa-G5EWYnTcqYOIFUFLCkEitOWSGio7Q",
    authDomain: "travella-app.firebaseapp.com",
    databaseURL: "https://travella-app.firebaseio.com",
    projectId: "travella-app",
    storageBucket: "travella-app.appspot.com",
    messagingSenderId: "19469433812"
};

/** 2. Initialize application using the provided {@see config} */
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

/** 3. Retrieve and make available
 * {@code firebase.auth()} module,
 * {@code firebase.database()} module,
 * {@code firebase.database} namespace,
 *  to other modules in application */
const dbase = firebase.database();
const databaseServices = firebase.database;

export {
    dbase,
    databaseServices
};
