import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
    //onState
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentlyUser) => {
            if(currentlyUser){
                setUser(currentlyUser);
                setLoading(true);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);

    //signOut
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }






    const authInfo = {
        signUp,
        singIn,
        user,
        userSignOut,
        loading
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