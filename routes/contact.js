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
router.post('/', (req, res) => {
    res.send('Add Contact');
})

// @route PUT      api/contacts/:id
// @description    Update contact
// @acess          private
router.put('/:id', (req, res) => {
    res.send('Update contact');
})

// @route DELETE      api/contacts
// @description       Delete contact
// @acess             private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
})


module.exports = router;