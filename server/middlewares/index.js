const router = require('express').Router();
const cors = require('./cors');
const bodyParser = require('body-parser');
const auth = require('../Auth/middlewares');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors);
router.use(auth);


module.exports = router;
