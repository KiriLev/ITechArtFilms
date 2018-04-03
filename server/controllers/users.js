const { User } = require('../models');


async function getUsers(req, res) {
    User.find({})
        .then((users) => res.status(200).send(users)).catch(res.status(500).send);
}


module.exports = {
    addUser,
    getUsers,
    getSessionUser,
}