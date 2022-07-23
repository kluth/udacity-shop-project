import express from 'express'
import { getAllUsers, getUser, createUser, User, loginUser, checkToken } from '../models/User'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    let users = await getAllUsers()
    res.status(200).json(users)
})

userRouter.get('/v/:id', checkToken, async (req, res) => {
    let user = await getUser(+req.params.id)
    res.status(200).json(user)
})

userRouter.post('/', async (req, res) => {
    let user = User()
    user.email = req.body.email
    user.password = req.body.password
    let newUser = await createUser(user)
    res.status(201).json(newUser)
})

userRouter.post('/login', async (req, res) => {
    let token = await loginUser(req.body.email, req.body.password)
    if (token === '') {
        res.clearCookie('token')
        res.status(401).json({ error: 'Invalid credentials' })
    }
    res.cookie('token', token, { httpOnly: true })
    res.status(200).json({ token })
})

userRouter.post('/logout', async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out' })
})

export default userRouter