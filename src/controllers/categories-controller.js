const Categories = require('../services/category');
const path = require('path')

const controller = {
    // Create
    categoryCreate: async (req, res) => {
        // Todo lo que venga en un formulario vendrá en un req.body
        if (req.body.name) {            
            await Categories.createCategory(req.body);
            res.send({
                code: 200,
                msg: "Creacion exitosa",
                result: 'http://localhost:3418'
            });
        } else {
            res.send("Error");
        }
    },
    categoriesList: async (req, res) => { // Read -> List
        let categoriesList = await Categories.findAll();
        console.log(categoriesList);
        res.send(categoriesList);
    },
    categoryDetail: async (req, res) => { // Read -> Detail
        const id = req.params.id;
        let category = await Categories.findById(id);
        res.send(category);
    },
    // Update
    categoryUpdate: async (req, res) => {
        const id = req.params.id;
        let resultado = await Categories.updateCategory(id, req.body);
        if (resultado > 0) {
            res.send("Edición exitosa");
        } else {
            res.send("Algo malio sal");
        };
    },
    // Delete
    categoryDelete: async (req, res) => {
        const id = req.params.id;
        let resultado = await Categories.deleteCategory(id);
        if (resultado > 0) {
            res.send("Borrado exitoso");
        } else {
            res.send("Algo malio sal");
        };
    }
}

module.exports = controller;