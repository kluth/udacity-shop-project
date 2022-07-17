interface UserProps {
    id: number;
    email: string;
    password: string;
}

const User = (): UserProps => {
    let user: UserProps = {
        id: 0,
        email: '',
        password: ''
    }
    return user
}

const getAllUsers = async (): Promise<UserProps[]> => {
    throw new Error('Not implemented')
}

const getUser = async (id: number): Promise<UserProps> => {
    throw new Error('Not implemented')
}

const createUser = async (user: UserProps): Promise<UserProps> => {
    throw new Error('Not implemented')
}

const updateUser = async (id: number, user: UserProps): Promise<UserProps> => {
    throw new Error('Not implemented')
}

const loginUser = async (email: string, password: string): Promise<UserProps> => {
    throw new Error('Not implemented')
}

const logoutUser = async (): Promise<UserProps> => {
    throw new Error('Not implemented')
}