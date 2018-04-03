
const router = require('express').Router();
const controller = require('../controllers');

router.post('/api/users/add', controller.createUser);
router.post('/api/users/login', controller.login);
router.post('/api/users/logout', controller.logout);

router.get('/api/users/session', controller.getSessionUser);


module.exports = router;
