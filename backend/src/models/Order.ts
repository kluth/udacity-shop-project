import { Pool } from "pg";

interface OrderProps {
    id: number;
    userId: number;
    status: boolean;
}

const Order = (): OrderProps => {
    let order: OrderProps = {
        id: 0,
        userId: 0,
        status: false
    }
    return order
}

const getAllOrders = async (): Promise<OrderProps[]> => {
    let pool = new Pool()
    await pool.connect()
    let orders: OrderProps[] = []
    let query = 'SELECT * FROM orders'
    let result = await pool.query(query)
    result.rows.forEach(row => {
        let order: OrderProps = {
            id: row.id,
            userId: row.user_id,
            status: row.status
        }
        orders.push(order)
    })
    return orders
}

const getOrder = async (id: number): Promise<OrderProps> => {
    return await getAllOrders().then(orders => {
        return orders.find(order => order.id === id)
    }) || Order()
}

const createOrder = async (order: OrderProps): Promise<OrderProps> => {
    let pool = new Pool()
    await pool.connect()
    let query = 'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *'
    let values = [order.userId, order.status]
    let result = await pool.query(query, values)
    let newOrder: OrderProps = {
        id: result.rows[0].id,
        userId: result.rows[0].user_id,
        status: result.rows[0].status
    }
    return newOrder
}

const updateOrder = async (id: number, order: OrderProps): Promise<OrderProps> => {
    throw new Error('Not implemented')
}