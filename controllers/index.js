const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('hello from the other routttteee');
});

module.exports = router;