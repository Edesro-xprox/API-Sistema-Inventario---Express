import mongoose from 'mongoose';

const allowedCollections = [
    'brands',
    'equipment_types',
    'locations',
    'models',
    'providers'
];

const getAllData = async (resource) => {
    if (!allowedCollections.includes(resource)) {
        throw new Error('Recurso no permitido');
    }

    return mongoose.connection
    .collection(resource)
    .find({})
    .toArray();
};

export default getAllData;