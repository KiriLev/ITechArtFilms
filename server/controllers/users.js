const User = require('../models/user');

async function addUser(req, res){
    console.log(req);
    const newUser = new User({
        username: 'ssss',
        hashedPassword: 'ds232ewde',
    });
    try {
        await newUser.save();
    } catch (e) {

    }
}

async function getUsers(req, res){
    try {
        const users = await User.find({});
    } catch (e) {

    }
}

module.exports = {
    addUser,
    getUsers
}