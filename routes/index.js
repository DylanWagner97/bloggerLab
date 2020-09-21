var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlBlog = require('../controllers/blog');

/* Set routes for home and blog */
router.get('/', ctrlHome);
router.get('/blog', ctrlBlog.blog);

module.exports = router;
