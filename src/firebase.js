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
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAuUHIhpFNEzqp-e3pOPq901ImasERTNdw",
  //   authDomain: "fsmdashboardtest.firebaseapp.com",
  //   databaseURL: "https://fsmdashboardtest.firebaseio.com",
  //   projectId: "fsmdashboardtest",
  //   storageBucket: "fsmdashboardtest.appspot.com",
  //   messagingSenderId: "686384032480",
  //   appId: "1:686384032480:web:ee283b18254f5cc5defe85",
  //   measurementId: "G-M5ML7BED0Q" 
    
  // };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore()

  export default db;