const config = require('./config');
const express = require('express');

const app = express();
const { index, users } = require('./routes');
const middlewares = require('./middlewares');

app.set('port', config.port);

app.use('/', index);
app.use('/api/users', users);
app.use(middlewares);


const port = app.get('port');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
