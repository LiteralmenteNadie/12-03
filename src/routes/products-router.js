const express = require("express");
const path = require("path");
const router = express.Router();

const productsController = require("../controllers/products-controller");

const multer = require("multer");
const storage = multer.diskStorage({
    /*
        file.originalname
        file.fieldname
    */
    destination: path.resolve(__dirname, "../../public/img/products"),
    filename: function(req, file, cb){
        // console.log(file);
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        )
    }
})

const upload = multer({
    storage: storage
})

// El primer parametro del router.get va a ser lo que iría inmediatamente despues
// de "http://localhost:3418"

// Create
router.post('/products', productsController.productCreate);

// Read
router.get('/products', productsController.productsList);
router.get('/products/:id', productsController.productDetail);

// Update
router.put('/products/:id', productsController.productUpdate);
router.patch('/products/:id', upload.single("image"), productsController.productUploadImage);

// Delete
router.delete('/products/:id', productsController.productDelete);

module.exports = router;