const router = require('express').Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    User.findAll().then((data) => {
        res.json(data);
    })
});

//post data to the User table.
router.post('/user', (req, res) => {
    User.create({

    })
})
module.exports = router;