const express = require('express');
const router = express.Router();

// This will have 4 routes.. CRUD routes

// @description    Get all user contacts
// @acess          private
// @route GET      api/contacts
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @description     all user contacts
// @acess          private
// @route GET      api/contacts
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @description    Get all user contacts
// @acess          private
// @route GET      api/contacts
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @description    Get all user contacts
// @acess          private
// @route GET      api/contacts
router.get('/', (req, res) => {
    res.send('Get all contacts');
})


module.export = router;