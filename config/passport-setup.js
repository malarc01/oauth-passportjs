const passport = require('passport');
const GithubStrategy = require('passport-github2');
const key = require('./keys');

passport.use(
	new GithubStrategy(
		{
			// options for the GithubStrategy
			callbackURL: '/auth/github/redirect',
			clientID: key.github.clientID,
			clientSecret: key.github.clientSecret
		},
		() => {
			//passport callback function
		}
	)
);
