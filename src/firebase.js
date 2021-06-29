  import firebase from 'firebase'

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDCMgxDgJmxCGm8sfo4QNSEwxhzP5T8qo",
    authDomain: "realtimedashboard-53e96.firebaseapp.com",
    projectId: "realtimedashboard-53e96",
    storageBucket: "realtimedashboard-53e96.appspot.com",
    messagingSenderId: "1037949123340",
    appId: "1:1037949123340:web:867fc1b1816d8a605de729"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore()

  export default db;