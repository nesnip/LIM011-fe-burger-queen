import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQHizDST_D3mkJnrBntDXGa9mr_l9fFLI",
    authDomain: "reactproject-9baf3.firebaseapp.com",
    databaseURL: "https://reactproject-9baf3.firebaseio.com",
    projectId: "reactproject-9baf3",
    storageBucket: "reactproject-9baf3.appspot.com",
    messagingSenderId: "12844446518",
    appId: "1:12844446518:web:a7faeda7f59142c7587997",
    measurementId: "G-DR0LFD0X9F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export default firebase;

 