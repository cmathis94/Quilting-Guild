const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    fullName: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Contact', ContactSchema)