const express = require("express");
const router = express.Router();
const Speciality = require("../models/speciality.model");

router.get("/", async (req, res) => {
    const speciality = await Speciality.find().lean().exec();
    res.status(200).send({ speciality });
})

module.exports = router;