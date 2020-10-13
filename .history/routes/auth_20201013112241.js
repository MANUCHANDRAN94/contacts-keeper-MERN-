const express = require('express');
const router = express.Router();

// This will have 2 routes... 1. to get the loged in user and 2.to login user and get the token

// @route GET      api/auth
// @description    Get lo0gged in user
// @acess          private
router.get('/', (req, res) => {
    res.send('Get logged in user');
})

// @route POST     api/auth
// @description    Auth user & get token
// @acess          Public
router.post('/', (req, res) => {
    res.send('Log in user');
})


module.export = router;
