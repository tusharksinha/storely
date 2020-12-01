import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAiAex44fsRMiK0CyeGIoaGXzPC0a8VV2M',
  authDomain: 'storely-c60f9.firebaseapp.com',
  databaseURL: 'https://storely-c60f9.firebaseio.com',
  projectId: 'storely-c60f9',
  storageBucket: 'storely-c60f9.appspot.com',
  messagingSenderId: '913610444659',
  appId: '1:913610444659:web:15ac78389c3d98288bff06',
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
