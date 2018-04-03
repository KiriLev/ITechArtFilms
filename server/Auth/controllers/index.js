const { User } = require('../models');
const bcrypt = require('bcrypt');

function createUser(req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        const user = {
            username: req.body.username,
            hashedPassword: hash,
        };
        User.create(user).then(result => res.status(201).send(result))
            .catch(err => res.status(400).send(err));
    });
}

async function login(req, res) {
    const userData = {
        username: req.body.username,
        password: req.body.password,
    }
    const userFromDb = await User.findOne({ "username": userData.username });
    if (!userFromDb) {
        res.status(401).send({ "error": "Wrong username" });
        return;
    }
    if (await bcrypt.compare(userData.password, userFromDb.hashedPassword)) {
        req.session.userId = userFromDb._id;
        req.session.save();
        res.status(200).send(userFromDb._id);
        return;
    }
    res.status(401).send({ "error": "Wrong password" });

}

function logout(req, res) {
    req.session.destroy();
    res.status(200).end();
}

async function getSessionUser(req, res) {
    const id = req.session.userId;
    User.find({_id: id})
        .then((user) => res.status(200).send(user)).catch(res.status(404).send);
}


module.exports = {
    login,
    logout,
    getSessionUser,
    createUser,
};
