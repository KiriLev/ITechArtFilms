const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/add', function (req, res) {
  res.send('eeeee');
  //controller.addUser(res.data);
});

module.exports = router;
