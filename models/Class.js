const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
   classNumber: Number,
   title: String,
   type: String,
   section: String,
   subjectCode: String
})

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;