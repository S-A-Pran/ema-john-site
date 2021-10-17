import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

firebaseInitialization();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () =>{
        signOut(auth)
        .then((result) => {
            setUser({});
        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    },[])
    return {
        user,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;