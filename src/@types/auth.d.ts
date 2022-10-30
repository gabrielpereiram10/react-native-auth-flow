export type AuthContextData = {
    authData?: AuthData
    isLoading: boolean
    signIn(data: SignData): Promise<{ success: boolean, message?: string }>
    signOut(): void
}

export type AuthData = {
    token: string
    email: string
    name: string
}

export type SignData = {
    email: string
    password: string
}