const { User } = require('../models');

function addUser(req, res) {
    const user = req.body;
    User.create({
        username: user.username,
        hashedPassword: user.password,
    }).then(res.status(200).end('OK'))
        .catch(e => res.status(500).json(e));
}

async function getUsers(req, res) {
    User.find({})
        .then((users) => res.status(200).send(users)).catch(res.status(500).send);
}


module.exports = {
    addUser,
    getUsers
}