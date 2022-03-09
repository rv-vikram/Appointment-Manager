const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "patientName": String,
    "age": Number,
    "doctor": { type: mongoose.Schema.Types.ObjectId, ref: 'doctor' }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema);
