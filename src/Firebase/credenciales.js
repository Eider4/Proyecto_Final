// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyARY5DQ-aIk0qo0P850nZnsTdghz4QEw3o",
//   authDomain: "proyecto-final-ayte.firebaseapp.com",
//   projectId: "proyecto-final-ayte",
//   storageBucket: "proyecto-final-ayte.appspot.com",
//   messagingSenderId: "761473448751",
//   appId: "1:761473448751:web:a2f99cd5321b243c34bfda",
//   measurementId: "G-GMDCV6WSX9"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const provider = new GoogleAuthProvider();

export { auth, provider , app};
