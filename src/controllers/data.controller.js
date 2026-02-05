import getDataService from '../services/data.service.js';

const getAllDataController = async (req, res) => {
    const { resource } = req.params;

    const data = await getDataService(resource);
    res.json(data);
};

export default getAllDataController;
