const express = require("express");
const path = require("path");
const router = express.Router();

const mainController = require("../controllers/main-controller");

// El primer parametro del router.get va a ser lo que iría inmediatamente despues
// de "http://localhost:3418"
router.get('/', mainController.home);

module.exports = router;