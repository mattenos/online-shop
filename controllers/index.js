const router = require('express').Router();

// const User = require('../models/User');


// localhost:3001/api/
router.get('/', (req, res) => {
	User.findAll().then((data) => {
        console.log('im here');
		res.json(data);
	});
});

module.exports = router;