const express = require('express');

const app = express();

// Routes
const usersRoutes =
const authRoutes =
const contactRoutes =


    app.get('/', (req, res) => {
        res.json({ msg: 'Welcome to the contact keeper aPP' });
    })

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));