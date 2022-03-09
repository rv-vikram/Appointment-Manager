const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor.model")

router.get("/", async (req, res) => {
    const doctor = await Doctor.find().populate("speciality").lean().exec();
    res.status(200).send({ doctor });
})
//trying for clinic
router.get("/:id", async (req, res) => {
    const doctor = await Doctor.find().populate("clinic");
    res.status(200).send({ doctor });
})

module.exports = router;