const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "age": Number,
    "speciality": [{ type: mongoose.Schema.Types.ObjectId, ref: 'speciality' }],
    "availability": [{ type: mongoose.Schema.Types.ObjectId, ref: 'availability' }],
    "userHistory": [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    "clinic": { type: mongoose.Schema.Types.ObjectId, ref: 'clinic' }
})

module.exports = mongoose.model("doctor", doctorSchema);

