import express from 'express'

const orderRouter = express.Router()

orderRouter.get('/', (req, res) => {
    res.status(501).send('Not implemented')
})

orderRouter.get('/v/:id', (req, res) => {
    res.status(501).send('Not implemented')
})

orderRouter.post('/', (req, res) => {
    res.status(501).send('Not implemented')
})

export default orderRouter