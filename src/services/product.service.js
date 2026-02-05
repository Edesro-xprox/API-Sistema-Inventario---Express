import * as productRepository from '../repositories/product.repository.js';

const getAllProducts = () => {
    return productRepository.findAll();
};

const getProductById = (id) => {
    return productRepository.findById(id);
};

const addProduct = (product) => {
    return productRepository.create(product);
};

const updateProduct = (id, productData) => {
    return productRepository.update(id, productData);
};

const patchProduct = (id, status) => {
    return productRepository.active(id, status);
};

export {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    patchProduct
};
