import express from 'express'

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
    res.status(501).send('Not implemented')
})

productRouter.get('/v/:id', (req, res) => {
    res.status(501).send('Not implemented')
})

productRouter.post('/', (req, res) => {
    res.status(501).send('Not implemented')
})

export default productRouter