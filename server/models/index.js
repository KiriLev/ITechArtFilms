const mongoose = require('mongoose');

const connectionString = `mongodb://server:${encodeURIComponent('yWwHkBIqAaNmnbll')}@` +
    'datacluster-shard-00-00-iv9to.mongodb.net:27017,' +
    'datacluster-shard-00-01-iv9to.mongodb.net:27017,' +
    'datacluster-shard-00-02-iv9to.mongodb.net:27017/projectData?' +
    'ssl=true&replicaSet=DataCluster-shard-0&authSource=admin';


mongoose.connect(connectionString);
const User = require('./user');

const db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});

db.once('open', function () {
    console.log('connected.');
});


const models = {
    User,
}

module.exports = models;