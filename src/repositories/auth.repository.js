import mongoose from 'mongoose';

const findGetByUserName = async (user) => {
    return await mongoose.connection
    .collection('users')
    .findOne({ user })
};

export default findGetByUserName;