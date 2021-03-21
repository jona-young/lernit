const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    tut_id: {
        type: mongoose.ObjectId,
        required: true
    },
    author: {
        type: mongoose.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    time_low: {
        type: String,
        required: true
    },
    time_high: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    steps: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Tutorials = mongoose.model('Tutorial', tutorialSchema);
module.exports = Tutorials;