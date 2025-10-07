// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userPermissions, setUserPermissions] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    // Registro
    const signup = async (email, password, name) => {
        // 1️⃣ Crear usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;

        // 2️⃣ Crear perfil del usuario
        await setDoc(doc(db, 'users', uid), { name });

        // 3️⃣ Crear permisos iniciales
        await setDoc(doc(db, 'userPermissions', uid), {
            nivel1: true,
            nivel2: false,
            nivel3: false
        });

        return userCredential;
    };

    // Login
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    // Logout
    const logout = () => signOut(auth);
    // Recuperar contraseña
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        let unsubscribePermissions = () => { };
        let unsubscribeProfile = () => { };

        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // 🔹 Suscribirse a permisos
                const userPermissionsRef = doc(db, 'userPermissions', currentUser.uid);
                unsubscribePermissions = onSnapshot(userPermissionsRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUserPermissions(docSnap.data());
                    } else {
                        // Esto ya no debería ocurrir, pero por seguridad
                        const initialPermissions = { nivel1: true, nivel2: false, nivel3: false };
                        setDoc(userPermissionsRef, initialPermissions)
                            .then(() => setUserPermissions(initialPermissions))
                            .catch(console.error);
                    }
                });

                // 🔹 Suscribirse al perfil del usuario
                const userProfileRef = doc(db, 'users', currentUser.uid);
                unsubscribeProfile = onSnapshot(userProfileRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUserProfile(docSnap.data());
                    } else {
                        setUserProfile(null);
                    }
                });

            } else {
                setUserPermissions(null);
                setUserProfile(null);
            }

            setLoading(false);
        });

        return () => {
            unsubscribeAuth();
            unsubscribePermissions();
            unsubscribeProfile();
        };
    }, []);

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
        resetPassword,
        userPermissions,
        userProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
