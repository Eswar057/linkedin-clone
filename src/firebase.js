import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTvYrbhYI1ChYfoqetJETF5bCjdRErgQ0",
  authDomain: "linkedin-clone-dff84.firebaseapp.com",
  projectId: "linkedin-clone-dff84",
  storageBucket: "linkedin-clone-dff84.appspot.com",
  messagingSenderId: "431940482024",
  appId: "1:431940482024:web:275f26b3dd953d52aaaa5d",
  measurementId: "G-ZD92NYRY8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
