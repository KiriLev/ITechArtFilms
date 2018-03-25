const router = require('express').Router();
const config = require('../config');
const cors = require('cors');

const corsOptions = {
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  allowedHeaders: ['Access-Control-Allow-Origin', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control', 'Expires'],
};

router.use(cors(corsOptions));

module.exports = router;
