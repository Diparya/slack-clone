import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxmVJg_qPMHjjae3MRKP8U6aDtMeYRCgo",
    authDomain: "slack-clone-6a1f5.firebaseapp.com",
    projectId: "slack-clone-6a1f5",
    storageBucket: "slack-clone-6a1f5.appspot.com",
    messagingSenderId: "210826890966",
    appId: "1:210826890966:web:de9bd1a9d856e2ea4b8377"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider, db };