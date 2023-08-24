const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },

    autor: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Post', postSchema);