import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getIdToken, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    // const [admin, setAdmin] = useState(false);
    // const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                //set username
                const newUser = { email, displayName: name };
                setUser(newUser);

                //store user information into database
                // saveUser(name, email, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    return  {
        user,
        // admin,
        // token,
        loading,
        authError,
        registerUser,
        // loginUser,
        // signInWithGoogle,
        // logout,
    }
};

export default useFirebase;