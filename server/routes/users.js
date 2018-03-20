const router = require('express').Router();

const controller = require('../controllers/users');

router.get('/api/users/', controller.getUsers);
router.patch('/api/users/add', controller.addUser);


module.exports = router;
