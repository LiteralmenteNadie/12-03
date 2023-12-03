const express = require("express");
const path = require("path");
const router = express.Router();

const mainController = require("../controllers/main-controller");

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
router.get('/', mainController.home);

// Create
router.post('/products', mainController.productCreate);

// Read
router.get('/products', mainController.productsList);
router.get('/products/:id', mainController.productDetail);

// Update
router.put('/products/:id', mainController.productUpdate);
router.patch('/products/:id', upload.single("image"), mainController.productUploadImage);

// Delete
router.delete('/products/:id', mainController.productDelete);

module.exports = router;