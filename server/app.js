const config = require('./config');

const express = require('express');
const path = require('path');

const { index, users } = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(middlewares);

app.set('port', config.port);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/users', users);


const port = process.env.PORT || app.get('port');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
