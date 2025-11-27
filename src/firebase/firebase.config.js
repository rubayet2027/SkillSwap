// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnIg_jxIZ7iY1yKyJFQZ6XDd_y462aoeI",
  authDomain: "skillswap-f70fd.firebaseapp.com",
  projectId: "skillswap-f70fd",
  storageBucket: "skillswap-f70fd.firebasestorage.app",
  messagingSenderId: "47342064336",
  appId: "1:47342064336:web:72f45e1fd949aaf97284d5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
