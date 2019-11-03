const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
	res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
	// handle with passport
	res.send('LOGGING OUT');
});

//auth with github
router.get(
	'/github',
	passport.authenticate('github', {
		scope: [ 'profile' ]

		//handle with passport.js
	})
);

// callback route for google to redirect to
router.get('/github/redirect', (req, res) => {
	res.send('CB URI');
});

module.exports = router;
