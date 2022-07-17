import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool()

interface UserProps {
    id: number;
    email: string;
    password: string;
}

export const User = (): UserProps => {
    let user: UserProps = {
        id: 0,
        email: '',
        password: ''
    }
    return user
}

export const getAllUsers = async (): Promise<UserProps[]> => {
    await pool.connect()
    let users: UserProps[] = []
    let query = 'SELECT * FROM users'
    let result = await pool.query(query)
    result.rows.forEach(row => {
        let user: UserProps = {
            id: row.id,
            email: row.email,
            password: row.password
        }
        users.push(user)
    })
    return users
}

export const getUser = async (id: number): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const createUser = async (user: UserProps): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const updateUser = async (id: number, user: UserProps): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const loginUser = async (email: string, password: string): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const logoutUser = async (): Promise<UserProps> => {
    throw new Error('Not implemented')
}