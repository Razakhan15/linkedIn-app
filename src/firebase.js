import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDP7pZF-XSE3YG9Em0XgO-Sk3o17zYpNYE",
  authDomain: "linkedin-clone-1f9f1.firebaseapp.com",
  projectId: "linkedin-clone-1f9f1",
  storageBucket: "linkedin-clone-1f9f1.appspot.com",
  messagingSenderId: "552631606378",
  appId: "1:552631606378:web:64be79397c0f65015a7e13",
  measurementId: "G-4YRGPRZJKY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
