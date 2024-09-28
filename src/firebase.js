// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgsMN897PwjZ6iBhYZ0lnsNKDCoogPsts",
  authDomain: "portfolio-91f55.firebaseapp.com",
  projectId: "portfolio-91f55",
  storageBucket: "portfolio-91f55.appspot.com",
  messagingSenderId: "559133001164",
  appId: "1:559133001164:web:be468d2cdb77a519ad8969",
  measurementId: "G-B6FRVX7BXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Google sign-in function
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info
      const user = result.user;
      console.log("User signed in: ", user);
      // You can store the user details in your app state or redirect to a new page
    })
    .catch((error) => {
      console.error("Error during Google sign-in: ", error.message);
    });
};

export { auth, db, storage };
