const express = require('express');
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening at LocalHost ${PORT}!`);
	});
});