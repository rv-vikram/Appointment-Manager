const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "age": Number,
    "speciality": { type: mongoose.Schema.Types.ObjectId, ref: 'speciality' },
    "availability": [{ type: mongoose.Schema.Types.ObjectId, ref: 'availability' }],
    "userHistory": [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
})

module.exports = mongoose.model("doctor", doctorSchema);