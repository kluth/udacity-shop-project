import { Pool } from 'pg'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
    return await getAllUsers().then(users => {
        return users.find(user => user.id === id)
    }) || User()
}

export const createUser = async (user: UserProps): Promise<UserProps> => {
    await pool.connect()
    let hashedPassword = await bcrypt.hash(user.password, +process.env.SALTROUNDS!);
    let query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *'
    let values = [user.email, hashedPassword]
    let result = await pool.query(query, values)
    let newUser: UserProps = {
        id: result.rows[0].id,
        email: result.rows[0].email,
        password: result.rows[0].password
    }
    return newUser
}

export const updateUser = async (id: number, user: UserProps): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const loginUser = async (email: string, password: string): Promise<string> => {
    await pool.connect()
    let query = 'SELECT * FROM users WHERE email = $1'
    let values = [email]
    let result = await pool.query(query, values)
    if (result.rows.length === 0) {
        return ''
    }
    let user: UserProps = {
        id: result.rows[0].id,
        email: result.rows[0].email,
        password: result.rows[0].password
    }
    // Check if password is correct with bcrypt
    let isCorrect = await bcrypt.compare(password, user.password)
    if (!isCorrect) {
        return ''
    }
    let token = jwt.sign(user, process.env.SECRET!, { expiresIn: '1h' })
    return token
}

export const logoutUser = async (): Promise<UserProps> => {
    throw new Error('Not implemented')
}

export const checkToken = async (req: any, res: any, next: any): Promise<void> => {
    let token = req.headers['authorization'].split(' ')[1]

    if (!token) {
        res.status(401).json({ error: 'No token provided' })
    }
    let decoded = jwt.verify(token, process.env.SECRET!)
    if (!decoded) {
        res.status(401).json({ error: 'Invalid token' })
    }
    req.user = decoded
    next()
}