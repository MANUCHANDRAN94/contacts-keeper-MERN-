const express = require('express');
const router = express.Router();

// This will have 4 routes.. CRUD routes

// @route GET      api/contacts
// @description    Get all user contacts
// @acess          private
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @route POST      api/contacts
// @description    Add new contact
// @acess          private
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @route GET      api/contacts
// @description    Get all user contacts
// @acess          private
router.get('/', (req, res) => {
    res.send('Get all contacts');
})

// @route GET      api/contacts
// @description    Get all user contacts
// @acess          private
router.get('/', (req, res) => {
    res.send('Get all contacts');
})


module.export = router;