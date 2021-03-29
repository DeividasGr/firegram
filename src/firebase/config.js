import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyCJv7vwjslEj31182SWF4oEzOkbgpZb0EE",
   authDomain: "firegram-88024.firebaseapp.com",
   projectId: "firegram-88024",
   storageBucket: "firegram-88024.appspot.com",
   messagingSenderId: "1009962878830",
   appId: "1:1009962878830:web:e504d90e0a1bb9c870637f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };