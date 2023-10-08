// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore/lite';
// import {getStorage} from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCYDEO0ipydsTI6DSC3Omx4QG0iGBC6PkU",
//   authDomain: "student-management-system-123.firebaseapp.com",
//   projectId: "student-management-system-123",
//   storageBucket: "student-management-system-123.appspot.com",
//   messagingSenderId: "212238846386",
//   appId: "1:212238846386:web:6a9093699e02aea68cbcab",
//   measurementId: "G-1BYQLQN0MH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// export {analytics, auth , firestore, storage}







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWgHrQVF6SIf3cjXsnO9UiCHD8Mnrh9fM",
  authDomain: "hackathon-ab610.firebaseapp.com",
  projectId: "hackathon-ab610",
  storageBucket: "hackathon-ab610.appspot.com",
  messagingSenderId: "1033538848793",
  appId: "1:1033538848793:web:83da50171b5cf8cc7c4288",
  measurementId: "G-NRLDWPB12Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {analytics, auth , firestore, storage}
