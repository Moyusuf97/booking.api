const mongoose = require('mongoose');
const { string, boolean } = require('yargs');
const { v4: uuidv4 } = require('uuid');


const cleanSchema = mongoose.Schema({
    uuid: {
      type: String,
      default: uuidv4,
      unique: true
    },
    
    Time: {
      type: String,
      default: (new Date()).getTime(),
      required: true

    },
    Level: {
        type: String,
        enum: ['Basic', 'Topp', 'Diamant', 'Fönster' ],
        // required: true
    },
    Städare: {
        type: String,
        // required: true
    },
    Status: {
        type: Boolean,
        default: false
    },
    Date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Clean', cleanSchema); 