/* Get home page. */
module.exports.home = function(req,res) {
	res.render('home', {title: 'Dylan Wagners Blog' });
};
