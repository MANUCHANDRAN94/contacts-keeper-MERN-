const express = require('express');
const router = express.Router();

// This will have 2 routes... 1. to get the loged in user and 2. to login user and get the token
// @route POST      api/users
// @description     Register a user
// @acess           public
router.post('/', (req, res) => {
    res.send('Register a user');
})