import express from 'express'

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.status(501).send('Not implemented')
})

userRouter.get('/v/:id', (req, res) => {
    res.status(501).send('Not implemented')
})

userRouter.post('/', (req, res) => {
    res.status(501).send('Not implemented')
})

export default userRouter