import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'



// var firebaseConfig = {
//     apiKey: "AIzaSyCT5yQgZ2hxjS64FhOOCfmqVqTQXkFWeVo",
//     authDomain: "add-projects-9c72b.firebaseapp.com",
//     projectId: "add-projects-9c72b",
//     storageBucket: "add-projects-9c72b.appspot.com",
//     messagingSenderId: "842118789463",
//     appId: "1:842118789463:web:4e88f9efa22f09f9b96612",
//     measurementId: "G-2F25VXFVX5"
//   };
  
//   firebase.initializeApp(firebaseConfig);
var firebaseConfig = {
  apiKey: "AIzaSyDpbk39kOZx2OLQYnJrsoGSdN-velrGXE8",
  authDomain: "react-blog-app-75ddd.firebaseapp.com",
  projectId: "react-blog-app-75ddd",
  storageBucket: "react-blog-app-75ddd.appspot.com",
  messagingSenderId: "691029496518",
  appId: "1:691029496518:web:16e22e318b22a9409e3dc7",
  measurementId: "G-EWJN4E21B3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 

  firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;
 