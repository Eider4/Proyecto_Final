import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  // signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARY5DQ-aIk0qo0P850nZnsTdghz4QEw3o",
  authDomain: "proyecto-final-ayte.firebaseapp.com",
  projectId: "proyecto-final-ayte",
  storageBucket: "proyecto-final-ayte.appspot.com",
  messagingSenderId: "761473448751",
  appId: "1:761473448751:web:1056cc0504cc3f7534bfda",
  measurementId: "G-E9VTN1GYF7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
// const providerFacebook = new FacebookAuthProvider();
// const providerPhone = new PhoneAuthProvider();

export { auth, providerGoogle, app };
