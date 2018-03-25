const index = require('./default');
const users = require('./users');

const router = require('express').Router();

router.use(users);

module.exports = router;

