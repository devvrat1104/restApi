const { getUser } = require('../Controllers/users');
const { createUser } = require('../Controllers/users');

const router = require('express').Router();

// Routes

// Get requests
router.route('/getUser').get(getUser)

// Post requests
router.route('/createUser').post(createUser)

// Put requests
router.put('/updateUser', (req, res) => {
    res.send('Update User!');
});

// Delete requests
router.delete('/deleteUser', (req, res) => {
    res.send('Delete User!');
});

module.exports = router