const express = require('express');
const router = express.Router();

// This will have 4 routes.. CRUD routes

// @route GET      api/contacts
// @description    Get all user contacts
// @acess           public
router.post('/', (req, res) => {
    res.send('Register a user');
})