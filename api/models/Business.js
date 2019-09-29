const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* Defining collection for business */
let Business = new Schema({
    person_name: {
        type: String
    },
    business_name: {
        type: String
    },
    business_gst_number: {
        type: Number
    },
    city: {
        type: String
    },
    province: {
        type: String
    }
},
    {
        collection: 'business'
    });

module.exports = mongoose.model('Business', Business);