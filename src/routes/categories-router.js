const express = require("express");
const path = require("path");
const router = express.Router();

const categoriesController = require("../controllers/categories-controller");

// El primer parametro del router.get va a ser lo que iría inmediatamente despues
// de "http://localhost:3418"

// Create
router.post('/categories', categoriesController.categoryCreate);

// Read
router.get('/categories', categoriesController.categoriesList);
router.get('/categories/:id', categoriesController.categoryDetail);

// Update
router.put('/categories/:id', categoriesController.categoryUpdate);

// Delete
router.delete('/categories/:id', categoriesController.categoryDelete);

module.exports = router;