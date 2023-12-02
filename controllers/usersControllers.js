const User = require('../schemas/user.js')


const getUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
}

const getUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((users) => {
            !users.length ? res.status(404).json("User not found") : res.json(users)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
}

const createUser = (req, res) => {
    const { username, first_name, last_name } = req.body;
    const user = new User({ username, first_name, last_name });
    user.save()
        .then(() => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
}

const updateAllTo = (req, res) => {

    const { from_name, to_name } = req.body;

    User.updateMany({ first_name: from_name }, { first_name: to_name })
        .then(() => {
            User.find({ first_name: to_name })
                .then((data) => {
                    res.json(data)
                })
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateAllTo
}