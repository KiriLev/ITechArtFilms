const auth = require('../Auth').routes;
const films = require('../Films').routes;
const router = require('express').Router();

router.use(auth);
router.use(films);


module.exports = router;

