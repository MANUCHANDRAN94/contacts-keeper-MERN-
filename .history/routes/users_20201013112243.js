const express = require('express');
const router = express.Router();

// @route POST      api/users
// @description     Register a user
// @acess           public
router.post('/', (req, res) => {
    res.send('Register a user');
})



module.export = router;