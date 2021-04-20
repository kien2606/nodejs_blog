const express = require("express");
const router = express.Router();
const siteController = require("../controllers/Site.controller");

router.get("/",siteController.index);

router.post("/", siteController.infor);

module.exports = router;  