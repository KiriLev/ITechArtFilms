const { User } = require('../models');
const bcrypt = require('bcrypt');

async function createUser(req, res) {

    if (!req.body.username) {
        const err = {
            username: "Can't be empty",
        }
        res.status(400).send(err);
        return;
    }

    if (!req.body.password) {
        const err = {
            password: "Can't be empty",
        }
        res.status(400).send(err);
        return;
    }
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
        
        const user = {
            username: req.body.username,
            hashedPassword: hash,
        };
        const checkUser = await User.find({ username: user.username });
        if (checkUser.length) {
            const err = {
                username: 'Username already exists',
            }
            res.status(400).send(err);
            return;
        }
        User.create(user).then(result => res.status(201).send(result))
            .catch(err => {
                res.status(400).send(err)
            });
    });
}

async function login(req, res) {
    if (!req.body.username) {
        const err = {
            username: "Can't be empty",
        }
        res.status(400).send(err);
        return;
    }

    if (!req.body.password) {
        const err = {
            password: "Can't be empty",
        }
        res.status(400).send(err);
        return;
    }
    
    const userData = {
        username: req.body.username,
        password: req.body.password,
    }
    const userFromDb = await User.findOne({ "username": userData.username });
    if (!userFromDb) {
        res.status(401).send({ "username": "Wrong username" });
        return;
    }
    if (await bcrypt.compare(userData.password, userFromDb.hashedPassword)) {
        req.session.userId = userFromDb._id;
        req.session.save();
        res.status(200).send(userFromDb);
        return;
    }
    res.status(401).send({ "password": "Wrong password" });

}

function logout(req, res) {
    req.session.destroy();
    res.status(200).end();
}



module.exports = {
    login,
    logout,
    createUser,
};
