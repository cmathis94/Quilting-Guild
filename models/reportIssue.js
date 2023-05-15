const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    fullName: String,
    email: String,
    issue: String
});

module.exports = mongoose.model('Report', ReportSchema)