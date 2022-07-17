interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
}

const Product = (): ProductProps => {
    let product: ProductProps = {
        id: 0,
        name: '',
        price: 0,
        description: ''
    }
    return product
}

const getAllProducts = async (): Promise<ProductProps[]> => {
    throw new Error('Not implemented')
}

const getProduct = async (id: number): Promise<ProductProps> => {
    throw new Error('Not implemented')
}

const createProduct = async (product: ProductProps): Promise<ProductProps> => {
    throw new Error('Not implemented')
}

const updateProduct = async (id: number, product: ProductProps): Promise<ProductProps> => {
    throw new Error('Not implemented')
}