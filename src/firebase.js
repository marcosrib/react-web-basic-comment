
import  firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

 var config = {
    apiKey: "AIzaSyA3JBAl8KSv5BPNtRMCit6FLPQjpTxVLPw",
    authDomain: "reactweb-a2999.firebaseapp.com",
    databaseURL: "https://reactweb-a2999.firebaseio.com",
    projectId: "reactweb-a2999",
    storageBucket: "",
    messagingSenderId: "1062469781047"
  };
  firebase.initializeApp(config);

  export const database =  firebase.database();
  export const auth = firebase.auth();