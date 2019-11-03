const express = require('express');
const authRoutes = require('./routes/auth-router');
const passportSetup = require('./config/passport-setup');

const app = express();

// setup the view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
	res.render('home');
});

app.listen(4444, () => {
	console.log('app.js listening on port 4444');
});
