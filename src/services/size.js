const {Sizes} = require('../database/models/index');

const service = {
    createSize: async (data) => {
        let newSize = {
            name: data.name
        };
        Sizes.create(newSize);
    }, // C

    findAll: async () => {
        let sizes = await Sizes.findAll({
            include: ["Products"]
        });
        // console.log(sizes);
        return sizes;
    }, // R
    findById: async (id) => {
        let SizeFound = Sizes.findOne({
            where: {
                id: id
            },
            include: ["Products"]
        })
        return SizeFound;
    }, // R

    updateSize: async (id, data) => {
        let newData = {
            name: data.name
        };

        let resultado = Sizes.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteSize: async (id) => {
        let resultado = Sizes.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;