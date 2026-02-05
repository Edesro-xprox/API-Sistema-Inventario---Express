import mongoose from 'mongoose';

const COLLECTION_NAME = 'products';

/**
 * Obtener todos los productos
 */
const findAll = async () => {
    return await mongoose.connection
        .collection(COLLECTION_NAME)
        .find({})
        .toArray();
};

/**
 * Obtener producto por id (Mongo _id)
 */
const findById = async (id) => {
    return await mongoose.connection
        .collection(COLLECTION_NAME)
        .findOne({ _id: new mongoose.Types.ObjectId(id) });
};

/**
 * Crear producto
 */
const create = async (product) => {
    const result = await mongoose.connection
        .collection(COLLECTION_NAME)
        .insertOne(product);

    return {
        _id: result.insertedId,
        ...product
    };
};

/**
 * Actualizar producto
 */
const update = async (id, productData) => {
    const result = await mongoose.connection
        .collection(COLLECTION_NAME)
        .findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(id) },
            { $set: productData },
            {
                returnDocument: 'after', // explícito
                upsert: false             // no crear si no existe
            }
        );

    return result; // null si no existe
};

/**
 * Cambiar estado de producto (activo/inactivo)
 */
const active = async (id, status) => {
    const result = await mongoose.connection
        .collection(COLLECTION_NAME)
        .updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { status: status === '1' ? true : false } });

    return result;
};

export {
    findAll,
    findById,
    create,
    update,
    active
};