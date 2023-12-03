const {Brands} = require('../database/models/index');

const service = {
    createBrand: async (data) => {
        let newBrand = {
            name: data.name
        };
        Brands.create(newBrand);
    }, // C

    findAll: async () => {
        let brs = await Brands.findAll({
            include: ["Products"]
        });
        // console.log(brs);
        return brs;
    }, // R
    findById: async (id) => {
        let BrandFound = Brands.findOne({
            where: {
                id: id
            },
            include: ["Products"]
        })
        return BrandFound;
    }, // R

    updateBrand: async (id, data) => {
        let newData = {
            name: data.name
        };

        let resultado = Brands.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    },
    uploadImage: async (id, data) => {
        let newData = {
            image: data.image
        };

        // newData.images.forEach((image) => {
        //     Image.create({
        //         name: image.filename,
        //         Brand_id: id
        //     })
        // })

        let resultado = Brands.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteBrand: async (id) => {
        let resultado = Brands.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;