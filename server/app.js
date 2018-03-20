const config = require('./config');

const express = require('express');
const path = require('path');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.set('port', config.port);
app.use(middlewares);

app.use(routes);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
//app.use('/', express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || app.get('port');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
