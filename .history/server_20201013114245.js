const express = require('express');

const app = express();

// Routes
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');


app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the contact keeper aPP' });
})

// Define Routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));