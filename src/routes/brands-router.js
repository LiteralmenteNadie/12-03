const express = require("express");
const path = require("path");
const router = express.Router();

const brandsController = require("../controllers/brands-controller");

const multer = require("multer");
const storage = multer.diskStorage({
    /*
        file.originalname
        file.fieldname
    */
    destination: path.resolve(__dirname, "../../public/img/brands"),
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
router.post('/brands', brandsController.brandCreate);

// Read
router.get('/brands', brandsController.BrandsList);
router.get('/brands/:id', brandsController.brandDetail);

// Update
router.put('/brands/:id', brandsController.brandUpdate);
// router.patch('/brands/:id', upload.single("image"), brandsController.);

// Delete
router.delete('/brands/:id', brandsController.brandDelete);

module.exports = router;