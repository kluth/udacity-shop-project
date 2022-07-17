import express from 'express'
import { getAllProducts, getProduct, Product, createProduct } from '../models/Product'

const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    let products = await getAllProducts()
    res.status(200).json(products)
})

productRouter.get('/v/:id', async (req, res) => {
    let product = await getProduct(+req.params.id)
    res.status(200).json(product)
})

productRouter.post('/', async (req, res) => {
    let product = Product()
    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description
    await createProduct(product)
    res.status(201).json(product)
})

export default productRouter