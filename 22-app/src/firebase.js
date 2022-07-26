// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOZp-vSJEiwDFhRlHilsET-TtuV4DdmU",
  authDomain: "todo-app-fb-7ea28.firebaseapp.com",
  projectId: "todo-app-fb-7ea28",
  storageBucket: "todo-app-fb-7ea28.appspot.com",
  messagingSenderId: "143358762597",
  appId: "1:143358762597:web:79a74c304fa2ac6029708c"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp)

export default db;