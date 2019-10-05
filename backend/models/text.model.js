const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textSchema = new Schema({
    caption: {
        type: String, 
        required: true,
    },
    bodyFull: {
        type: String,
        required: true,
        trim: true,
    },
    bodyShort: {
        type: String,
        required: true,
        trim: true,
    },
    words: {
        type: Number,
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
    bestSpeed: {
        type: Number,
    },
    bestSpeedOwner: {
        type: String,
    },
    bestSpeedOwnerMistakes: {
        type: String,
    }
}, {
    timestamps: true
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;