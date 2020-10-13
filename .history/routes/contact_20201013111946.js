const express = require('express');
const router = express.Router();

// This will have 4 routes.. CRUD routes

// @route POST      api/users
// @description     Register a user
// @acess           public
router.post('/', (req, res) => {
    res.send('Register a user');
})