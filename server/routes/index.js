const users = require('./users');
const films = require('../Films');
const router = require('express').Router();

router.use(users);
router.use(films);


module.exports = router;

