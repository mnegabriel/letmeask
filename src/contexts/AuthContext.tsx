import { useState, useEffect, createContext, ReactNode } from 'react';

import { auth, firebase } from '../services/firebase'


type User = {
    id: string,
    name: string,
    avatar: string
}

type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>,
}

type AuthContextProviderType = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderType) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(persistedUser => setUserData(persistedUser))

        return () => unsub()
    }, [])

    async function signInWithGoogle(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider()

        const { user } = await auth.signInWithPopup(provider)

        setUserData(user)
    }

    function setUserData(user: firebase.User | null) {
        if (!user) throw new Error('User Not found')

        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) throw new Error('Missing information from Google Account')

        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })
    }
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}