const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const config = require('config');//! config evdunu venelum neere vilika its everywhere accessbl. relative path ett vilikanda

//? requireing the model
const User = require("../models/User");

// @route POST      api/users
// @description     Register a user
// @acess           public
router.post(
    "/",
    [check("name", "Please add name").not().isEmpty(), //it says it should not be empty ; same as "isNotEmpty"
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {  //todo checks if there is any errors
            return res.status(400).json({ errors: errors.array() });       //todo  errors.array() will give a array of errors validator found
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(404).json({ msg: 'User already exists!!' });
            }

            user = new User({ name, email, password })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save()

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
    }
);

module.exports = router;
