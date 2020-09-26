/* GET blog page. */
module.exports.blogList = function(req,res) {
	res.render('blogList', { title: 'Blog list'});
}
module.exports.blogAdd = function(req,res) {
	res.render('blogAdd', { title: 'Blog Add'});
}
