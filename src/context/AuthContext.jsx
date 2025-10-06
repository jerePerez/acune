// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

// 1. Importar 'db' de Firebase y funciones de Firestore
import { auth, db } from '../firebaseConfig'; // <- Asegúrate de que tu archivo se llama 'firebase' y exporta 'db'
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // 2. Nuevo estado para almacenar los permisos
    const [userPermissions, setUserPermissions] = useState(null);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth);

    useEffect(() => {
        let unsubscribePermissions = () => { }; // Inicializar función de limpieza de Firestore

        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // El usuario está logueado: intentamos cargar sus permisos
                const userDocRef = doc(db, 'userPermissions', currentUser.uid);

                // 3. Suscribirse a los permisos en tiempo real (onSnapshot)
                unsubscribePermissions = onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        // Documento encontrado: guarda los permisos
                        setUserPermissions(docSnap.data());
                    } else {
                        // Documento NO encontrado: crea los permisos iniciales
                        console.log("Creando permisos iniciales para el usuario...");

                        const initialPermissions = {
                            nivel1: true, // Contenido básico
                            nivel2: false, // Contenido exclusivo (pendiente de tu OK)
                        };

                        // Crear el documento en Firestore
                        setDoc(userDocRef, initialPermissions)
                            .then(() => setUserPermissions(initialPermissions))
                            .catch(error => console.error("Error al crear permisos iniciales:", error));
                    }
                    // 4. Establecer loading a false SÓLO después de verificar Auth y Permisos
                    setLoading(false);
                }, (error) => {
                    console.error("Error al leer permisos de Firestore:", error);
                    setLoading(false);
                });

            } else {
                // Usuario no logueado
                setUserPermissions(null);
                setLoading(false);
            }
        });

        // Limpieza: Desuscribirse de Auth y de Firestore
        return () => {
            unsubscribeAuth();
            unsubscribePermissions();
        };
    }, []);

    // 5. Exponer userPermissions en el valor del contexto
    const value = {
        user,
        loading,
        signup,
        login,
        logout,
        userPermissions
    };

    return (
        <AuthContext.Provider value={value}>
            {/* Solo renderiza cuando ya se haya verificado auth y cargado permisos */}
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};