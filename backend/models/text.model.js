const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textSchema = new Schema({
    caption: {
        type: String, 
        required: true,
    },
    body: {
        type: String,
        required: true,
        trim: true,
        minlength: 25,
    },
    tags: {
        type: String,
    },
    language: {
        type: String,
    },
    rate: {
        type: Number,
    },
    owner: {
        type: String,
    },
    yourSpeed: {
        type: Number,
    },
    bestSpeed: {
        type: Number,
    },
    bestSpeedOwner: {
        type: String,
    }
}, {
  timestamps: true,
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;