import express, { Request, Response } from 'express'
import userRouter from './routes/userRoutes'
import productRouter from './routes/productRoutes'
import orderRouter from './routes/orderRoutes'

const app: express.Application = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)

export default app
