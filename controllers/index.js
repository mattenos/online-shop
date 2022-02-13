const router = require('express').Router();

// const User = require('./models/User');

// const userRoutes = require('./user-routes');

// router.use('/user', userRoutes);

router.get('/', (req, res) => {
    res.send('hello from the other routttteee')
});



module.exports = router;