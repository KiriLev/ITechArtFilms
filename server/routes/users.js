const express = require('express');

const controller = require('../controllers/users');

const router = express.Router();


router.patch('/add', controller.addUser);

router.get('/', controller.getUsers);

module.exports = router;
