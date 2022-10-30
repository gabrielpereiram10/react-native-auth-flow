import { AuthData } from "../@types/auth"

const authenticate = (email: string, _password: string): Promise<AuthData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "token",
                email: email,
                name: 'Fulano da Silva',
            })
        }, 1000)
    })
}

export const authService = {
    authenticate
}