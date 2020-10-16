//!NOTE: Giving 1st letter to schema is conventional

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //!userinte id kittan: as every user have their own contacts
        ref: 'user' //! edh refernce cheyune userne aanu
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('contact', ContactSchema);
// ? suppose users annel athinte singular 'user' aanu evde k0oduka