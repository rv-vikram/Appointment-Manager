const mongoose = require("mongoose");

const availibilitySchema = new mongoose.Schema({
    "startTime": String,
    "endTime": String,
}, {
    versionKey: false
})

module.exports = mongoose.model("availibility", availibilitySchema);

