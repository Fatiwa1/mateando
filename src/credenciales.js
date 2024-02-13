// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM29iu08u5MWvdiVtNuDWYYQWzbrxx_pM",
  authDomain: "mateando-8fc89.firebaseapp.com",
  projectId: "mateando-8fc89",
  storageBucket: "mateando-8fc89.appspot.com",
  messagingSenderId: "440704860320",
  appId: "1:440704860320:web:ba6d84bb0d4782499349c5",
  measurementId: "G-0GEDW5VN1M"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase;