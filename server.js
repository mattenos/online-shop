const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// const User = require('./models/User');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening at LocalHost ${PORT}!`);
	});
});