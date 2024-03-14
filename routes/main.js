const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const mainController = require("../controllers/main");

router.get("/", wrapAsync(mainController.index));
router.get("/panchang", wrapAsync(mainController.panchang));
router.get("/puja", wrapAsync(mainController.puja));
router.get("/puja/:id", wrapAsync(mainController.show));

module.exports = router;
