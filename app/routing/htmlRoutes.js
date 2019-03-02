
module.exports = (app) => {

	app.get('/', (req, res) => {
		res.sendFile('home.html', { root: './app/public' });
	});

	app.get('/survey', (req,res) => {
		res.sendFile('survey.html', { root: './app/public' });
	})

	app.get('/logic.js', (req,res) => {
		res.sendFile('logic.js', { root: './' });
	})
};

