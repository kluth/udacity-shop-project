import express from 'express'
import { getAllUsers, getUser, createUser, User } from '../models/User'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    let users = await getAllUsers()
    res.status(200).json(users)
})

userRouter.get('/v/:id', async (req, res) => {
    let user = await getUser(+req.params.id)
    res.status(200).json(user)
})

userRouter.post('/', async (req, res) => {
    let user = User()
    user.email = req.body.email
    user.password = req.body.password
    await createUser(user)
    res.status(201).json(user)
})

export default userRouter