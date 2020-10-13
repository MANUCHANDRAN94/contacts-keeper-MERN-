const express = require('express');
const router = express.Router();

// This will have 2 routes... 1. to get the loged in user and 2.to login user and get the token
// @route GET      api/auth
// @description    Get lo0gged in user
// @acess          private

router.get('/', (req, res) => {
    res.send('Register a user');
})