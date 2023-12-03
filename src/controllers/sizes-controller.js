const Sizes = require('../services/size');
const path = require('path')

const controller = {
    // Create
    sizeCreate: async (req, res) => {
        // Todo lo que venga en un formulario vendrá en un req.body
        if (req.body.name) {            
            await Sizes.createSize(req.body);
            res.send({
                code: 200,
                msg: "Creacion exitosa",
                result: 'http://localhost:3418'
            });
        } else {
            res.send("Error");
        }
    },
    sizesList: async (req, res) => { // Read -> List
        let sizesList = await Sizes.findAll();
        console.log(sizesList);
        res.send(sizesList);
    },
    sizeDetail: async (req, res) => { // Read -> Detail
        const id = req.params.id;
        let size = await Sizes.findById(id);
        res.send(size);
    },
    // Update
    sizeUpdate: async (req, res) => {
        const id = req.params.id;
        let resultado = await Sizes.updateSize(id, req.body);
        if (resultado > 0) {
            res.send("Edición exitosa");
        } else {
            res.send("Algo malio sal");
        };
    },
    // Delete
    sizeDelete: async (req, res) => {
        const id = req.params.id;
        let resultado = await Sizes.deleteSize(id);
        if (resultado > 0) {
            res.send("Borrado exitoso");
        } else {
            res.send("Algo malio sal");
        };
    }
}

module.exports = controller;