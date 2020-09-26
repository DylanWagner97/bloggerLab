var express = require('express');
var router = express.Router();
var controllers = require('../controllers/home');
var controller = require('../controllers/blog');

/* Set routes for home and blog */
router.get('/', controllers.home);
router.get('/blogList', controller.blogList);
router.get('/blogAdd', controller.blogAdd);

module.exports = router;
