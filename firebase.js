import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/auth'
import 'firebase/firestore'


let firebaseConfig = {

    apiKey: "AIzaSyD2CyYCQmw_3SfLRaO9wp51Mir28hinvM0",
  
    authDomain: "redux-58a4b.firebaseapp.com",
  
    projectId: "redux-58a4b",
  
    storageBucket: "redux-58a4b.appspot.com",
  
    messagingSenderId: "446228701466",
  
    appId: "1:446228701466:web:542f24580d44385a434ca3",
  
    measurementId: "G-ZFSHFH52H9"
  
  };
  
firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore().collection('favs');

// export function updateDB(array,uid){
//   return db.doc(uid).set({array})
// }

export function signOutGoogle(){
    firebase.auth().signOut()
}

export function loginWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(snap => snap.user);
    }