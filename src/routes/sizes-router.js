const express = require("express");
const path = require("path");
const router = express.Router();

const sizesController = require("../controllers/sizes-controller");

// El primer parametro del router.get va a ser lo que iría inmediatamente despues
// de "http://localhost:3418"

// Create
router.post('/sizes', sizesController.sizeCreate);

// Read
router.get('/sizes', sizesController.sizesList);
router.get('/sizes/:id', sizesController.sizeDetail);

// Update
router.put('/sizes/:id', sizesController.sizeUpdate);

// Delete
router.delete('/sizes/:id', sizesController.sizeDelete);

module.exports = router;