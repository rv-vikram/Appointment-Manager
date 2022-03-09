const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
    "Name": String,
    "totalDoctor": [{ type: mongoose.Schema.Types.ObjectId, ref: 'doctor' }]
})

module.exports = mongoose.model("clinic", clinicSchema);