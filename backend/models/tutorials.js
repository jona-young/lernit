const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({});

const Tutorials = mongoose.model('Tutorial', tutorialSchema);
module.exports = Tutorials;