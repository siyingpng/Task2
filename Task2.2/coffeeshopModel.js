// coffeeshopModel.js
var mongoose = require('mongoose');

// Setup schema
var coffeeshopSchema = mongoose.Schema({
    shopName: {
        type: String,
    //    required: true
    },
    shopAddress: {
        type: String,
    //    required: true
    },
    shopTel: String,
    shopInstagram: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Coffeeshop model
module.exports = mongoose.model('coffeeshop', coffeeshopSchema);