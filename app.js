const express = require('express');

const app = express();

// setup the view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
	res.render('home');
});

app.listen(4444, () => {
	console.log('app.js listening on port 4444');
});
