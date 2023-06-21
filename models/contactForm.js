const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
  fullName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
