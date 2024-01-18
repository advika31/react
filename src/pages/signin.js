import React, { useState } from "react";
// import { auth,googleProvider } from "../config/firebase";
import {auth,Google} from '../firebase.js';
import { createUserWithEmailAndPassword,signOut,signInWithPopup } from "firebase/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signInWithEmail = async() => {
        try {
            await createUserWithEmailAndPassword(auth,email,password);
        } catch (error) {
            console.error();
        }
    }

    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth,Google);
        } catch (error) {
            console.error();
        }
    }

    const logout = async() => {
        try {
         await signOut(auth);   
        } catch (error) {
            console.error();
        }
    }

  return (
    <div>
      <h1>Sign In page</h1>
      {/* email/password */}
      <div className="auth-form">
        <form className="login-form">
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={signInWithEmail}>Sign In</button>
        </form>
      </div>
      {/* google provider */}
      <div className="google-form">
        <button onClick={signInWithGoogle}>Sign in w Google</button>
      </div>
      <button onClick={logout}>sign out</button>
    </div>
  );
}

export default SignIn;