import getAllData from '../repositories/data.repository.js';

const getDataService = async (resource) => {
    return getAllData(resource);
}

export default getDataService;