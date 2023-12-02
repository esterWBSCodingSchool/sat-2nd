const User = require('../schemas/user.js')

const nameIsPresent = (req, res, next) => {
    const { from_name } = req.body
    User.findOne({ first_name: from_name })
        .then((data) => {
            !data ?  res.status(404).json("first_name is not on the database")  : next();
        })
        .catch((err) =>  res.status(500).json(err.message) )
}

module.exports = { nameIsPresent }