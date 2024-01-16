const User = require('../Models/users')

const getUser = async(req, res) => {
    const users = await User.find();
    res.status(200).json({ data: users })
}

const createUser = async(req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.status(201).json({ user: user })
}

module.exports = { getUser, createUser }