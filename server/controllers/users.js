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
    try {
        const users = await User.find({});
    } catch (e) {

    }
}



module.exports = {
    addUser,
    getUsers
}