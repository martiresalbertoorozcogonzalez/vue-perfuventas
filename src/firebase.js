import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCEn27_5dmRY4bMFyE0JmqHdhShI4hygGI",
    authDomain: "perfuventas-26ccb.firebaseapp.com",
    databaseURL: "https://perfuventas-26ccb.firebaseio.com",
    projectId: "perfuventas-26ccb",
    storageBucket: "gs://perfuventas-26ccb.appspot.com/",
    messagingSenderId: "404445395018",
    appId: "1:404445395018:web:40f7b406a9b6e970"
  };
 

  // Initialize Firebase
  const fb = firebase.initializeApp(config);
  
  const db = firebase.firestore();

  export {fb,db}




