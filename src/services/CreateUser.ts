interface ICreateUserData {
    name?: string
    email: string
    password: string
}

export function createUser({name, email, password}:ICreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;

}