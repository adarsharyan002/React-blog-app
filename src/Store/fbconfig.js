import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCT5yQgZ2hxjS64FhOOCfmqVqTQXkFWeVo",
    authDomain: "add-projects-9c72b.firebaseapp.com",
    projectId: "add-projects-9c72b",
    storageBucket: "add-projects-9c72b.appspot.com",
    messagingSenderId: "842118789463",
    appId: "1:842118789463:web:4e88f9efa22f09f9b96612",
    measurementId: "G-2F25VXFVX5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;
 