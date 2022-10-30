import React, { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthData, SignData, AuthContextData } from "../@types/auth"
import { authService } from "../services/auth"

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [authData, setAuthData] = useState<AuthData>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        loadStorageData()
    }, [])

    const loadStorageData = async (): Promise<void> => {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData')
            if (authDataSerialized) {
                const _authData: AuthData = JSON.parse(authDataSerialized)
                setAuthData(_authData)
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    const signIn = async (data: SignData) => {
        if (data.email !== "fulano@gmail.com" || data.password !== "123456") {
            return {
                success: false,
                message: "Credenciais inválidas."
            }
        }
        const authData = await authService.authenticate(
            data.email,
            data.password,
        )

        setAuthData(authData)
        AsyncStorage.setItem('@AuthData', JSON.stringify(authData))
        return { success: true }
    }

    const signOut = async () => {
        setAuthData(undefined)
        await AsyncStorage.removeItem('@AuthData')
    }

    return (
        <AuthContext.Provider value={{ authData, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}