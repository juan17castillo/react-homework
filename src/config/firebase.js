import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmRAHgir6S7esdp5ACr4OFYk7h5lcRKQY",
    authDomain: "usersandcampusmanager.firebaseapp.com",
    projectId: "usersandcampusmanager",
    storageBucket: "usersandcampusmanager.appspot.com",
    messagingSenderId: "1016626475792",
    appId: "1:1016626475792:web:b73cd58a990611ac446b95"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;