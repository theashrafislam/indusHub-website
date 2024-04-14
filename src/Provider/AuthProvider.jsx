import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    //createUser
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //userLogin
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signOut
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //loginWithGoogle
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    //loginWithGithub
    const loginWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    //updateProfile
    const updateUserProfile = (displayName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photo
        })
            .then(() =>{
                console.log("profile updated");
                setLoading(true)
            })
            .catch(() =>{
                console.log("profile not updated");
            })
    }

    //onState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [reload])







    const authInfo = {
        signUp,
        singIn,
        user,
        userSignOut,
        loading,
        loginWithGoogle,
        loginWithGitHub,
        updateUserProfile,
        setReload,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.object
}