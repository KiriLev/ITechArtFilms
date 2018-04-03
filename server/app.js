const config = require('./config');

const express = require('express');
const path = require('path');

const routes = require('./routes');
const middlewares = require('./middlewares');

const mongoose = require('mongoose');

const connectionString = `mongodb://server:${encodeURIComponent('yWwHkBIqAaNmnbll')}@` +
    'datacluster-shard-00-00-iv9to.mongodb.net:27017,' +
    'datacluster-shard-00-01-iv9to.mongodb.net:27017,' +
    'datacluster-shard-00-02-iv9to.mongodb.net:27017/projectData?' +
    'ssl=true&replicaSet=DataCluster-shard-0&authSource=admin';


mongoose.connect(config.connectionString);


const app = express();

app.set('port', config.port);
app.use(middlewares);

app.use(routes);



app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || app.get('port');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
