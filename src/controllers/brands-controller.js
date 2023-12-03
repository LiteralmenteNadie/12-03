const Brands = require('../services/brand');
const path = require('path')

const controller = {
    // Create
    brandCreate: async (req, res) => {
        // Todo lo que venga en un formulario vendrá en un req.body
        if (req.body.name) {            
            await Brands.createBrand(req.body);
            res.send({
                code: 200,
                msg: "Creacion exitosa",
                result: 'http://localhost:3418'
            });
        } else {
            res.send("Error");
        }
    },
    BrandsList: async (req, res) => { // Read -> List
        let BrandsList = await Brands.findAll();
        console.log(BrandsList);
        res.send(BrandsList);
    },
    brandDetail: async (req, res) => { // Read -> Detail
        const id = req.params.id;
        let brand = await Brands.findById(id);
        res.send(brand);
    },
    // Update
    brandUpdate: async (req, res) => {
        const id = req.params.id;
        let resultado = await Brands.updateBrand(id, req.body);
        if (resultado > 0) {
            res.send("Edición exitosa");
        } else {
            res.send("Algo malio sal");
        };
    },
    // Delete
    brandDelete: async (req, res) => {
        const id = req.params.id;
        let resultado = await Brands.deleteBrand(id);
        if (resultado > 0) {
            res.send("Borrado exitoso");
        } else {
            res.send("Algo malio sal");
        };
    }
}

module.exports = controller;