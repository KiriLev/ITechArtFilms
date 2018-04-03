const router = require('express').Router();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../../config');

var store = new MongoDBStore(
    {
        uri: config.connectionString,
        databaseName: 'projectData',
        collection: 'Sessions'
    },
    function (error) {
        if(error)
            console.log(error);
    });

router.use(session({
    secret: 'This is a secret',

    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    proxy: true,

    store,
    resave: true,
    saveUninitialized: true,
}));


module.exports = router;
