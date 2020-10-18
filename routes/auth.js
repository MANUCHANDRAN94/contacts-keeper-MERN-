const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const config = require('config');
const auth = require('../middleware/auth');

const User = require("../models/User");

// This will have 2 routes... 1. to get the loged in user and 2.to login user and get the token

// @route GET      api/auth
// @description    Get lo0gged in user
// @acess          private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); //! usere return cheyum everything except password
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }

})

// @route POST     api/auth
// @description    Auth user & get token
// @acess          Public
router.post('/', [check('email', 'Please enter a valid email..').isEmail(),
check('password', 'Password is required!').exists()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ msg: 'Invalid Credentials' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({ msg: 'Invalid Credentials' });
            }

            // * Sending the token if signin success
            const payload = {
                user: {
                    id: user.id
                }
            };//todo we include this a payload. so if we get this id we can verify and fetch data of user.

            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token })
            });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error !');
        }
    })


module.exports = router;
