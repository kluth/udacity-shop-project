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
    throw new Error('Not implemented')
}

const getOrder = async (id: number): Promise<OrderProps> => {
    throw new Error('Not implemented')
}

const createOrder = async (order: OrderProps): Promise<OrderProps> => {
    throw new Error('Not implemented')
}

const updateOrder = async (id: number, order: OrderProps): Promise<OrderProps> => {
    throw new Error('Not implemented')
}