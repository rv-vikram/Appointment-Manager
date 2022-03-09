const mongoose = require("mongoose");

const specialitySchema = new mongoose.Schema({
    "department": String
})

module.exports = mongoose.model("speciality", specialitySchema);
