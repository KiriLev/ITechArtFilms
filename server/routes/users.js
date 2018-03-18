const express = require('express');
const controller = require('../controllers/users');
const router = express.Router();


router.post('/add', controller.addUser);

router.get('/', controller.getUsers);

module.exports = router;
