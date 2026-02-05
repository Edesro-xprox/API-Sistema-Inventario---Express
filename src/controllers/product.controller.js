import * as productService from '../services/product.service.js';

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
};

const addProduct = async (req, res) => {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(updatedProduct);
};

const patchProduct = async (req, res) => {
    const wasDeleted = await productService.patchProduct(req.params.id, req.params.status);
    if (!wasDeleted) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(wasDeleted);
};

export {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    patchProduct
};