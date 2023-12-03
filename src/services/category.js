const {Categories} = require('../database/models/index');

const service = {
    createCategory: async (data) => {
        let newCategory = {
            name: data.name
        };
        Categories.create(newCategory);
    }, // C

    findAll: async () => {
        let cats = await Categories.findAll({
            include: ["Products"]
        });
        // console.log(cats);
        return cats;
    }, // R
    findById: async (id) => {
        let categoryFound = Categories.findOne({
            where: {
                id: id
            },
            include: ["Products"]
        })
        return categoryFound;
    }, // R

    updateCategory: async (id, data) => {
        let newData = {
            name: data.name
        };

        let resultado = Categories.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteCategory: async (id) => {
        let resultado = Categories.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;