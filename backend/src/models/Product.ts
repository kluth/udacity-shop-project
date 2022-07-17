import { Pool } from "pg";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const Product = (): ProductProps => {
    let product: ProductProps = {
        id: 0,
        name: '',
        price: 0,
        description: ''
    }
    return product
}

export const getAllProducts = async (): Promise<ProductProps[]> => {
    let pool = new Pool()
    await pool.connect()
    let products: ProductProps[] = []
    let query = 'SELECT * FROM products'
    let result = await pool.query(query)
    result.rows.forEach(row => {
        let product: ProductProps = {
            id: row.id,
            name: row.name,
            price: row.price,
            description: row.description
        }
        products.push(product)
    })
    return products
}

export const getProduct = async (id: number): Promise<ProductProps> => {
    return await getAllProducts().then(products => {
        return products.find(product => product.id === id)
    }) || Product()
}

export const createProduct = async (product: ProductProps): Promise<ProductProps> => {
    let pool = new Pool()
    await pool.connect()
    let query = 'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *'
    let values = [product.name, product.price, product.description]
    let result = await pool.query(query, values)
    let newProduct: ProductProps = {
        id: result.rows[0].id,
        name: result.rows[0].name,
        price: result.rows[0].price,
        description: result.rows[0].description
    }
    return newProduct
}

export const updateProduct = async (id: number, product: ProductProps): Promise<ProductProps> => {
    throw new Error('Not implemented')
}