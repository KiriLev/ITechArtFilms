const router = require('express').Router();
const cors = require('./cors');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors);


module.exports = router;
