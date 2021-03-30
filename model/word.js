const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    name: String,
    category: String,
    explanation: String,
    classname: String,
    classnumber: String,
    translation: String
});

module.exports = mongoose.model('words', wordSchema);