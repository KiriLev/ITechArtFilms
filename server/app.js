const config = require('./config');

const express = require('express');
const path = require('path');


const app = express();
const { index, users } = require('./routes');
const middlewares = require('./middlewares');

app.set('port', config.port);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/users', users);
app.use(middlewares);


const port = process.env.PORT || app.get('port');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
