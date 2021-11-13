import initialization from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  updateProfile,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

initialization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [successUser, setSuccessUser] = useState(false);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // register with email
  const registerWithEmail = (email, name, password, location, history) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        setSuccessUser(true);
        const destination = location?.state?.from || "/shop";
        history.replace(destination);
        setError("");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccessUser(false);
        // ..
      })
      .finally(() => setIsLoding(false));
  };
  // login with google

  const signInWithGoogle = (location, history) => {
    setIsLoding(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  // login with email
  const loginWithEmail = (email, password, location, history) => {
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setSuccessUser(false);
        setUser(userCredential.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };
  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoding(false);
      return unsubscribe;
    });
  }, []);
  // admin useEffect
  useEffect(() => {
    fetch(`https://lit-falls-18743.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  // log Out
  const logOut = () => {
    setIsLoding(true);
    setSuccessUser(false);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoding(false));
  };
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://lit-falls-18743.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    admin,
    error,
    isLoding,
    successUser,
    registerWithEmail,
    signInWithGoogle,
    loginWithEmail,
    logOut,
  };
};

export default useFirebase;
