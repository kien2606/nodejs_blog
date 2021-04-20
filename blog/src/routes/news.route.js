const express = require('express');
const router = express.Router();
const newController = require('../controllers/News.controller');


router.use('/',newController.index);


module.exports = router;