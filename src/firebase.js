
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ8qTmnel98z0KSGKc05DPko8PTvru3QI",
  authDomain: "my-first-project-79888.firebaseapp.com",
  projectId: "my-first-project-79888",
  storageBucket: "my-first-project-79888.appspot.com",
  messagingSenderId: "415822006575",
  appId: "1:415822006575:web:fde777bcd21206e7b0b9da",
  measurementId: "G-D9PW457CJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const Google=new GoogleAuthProvider();