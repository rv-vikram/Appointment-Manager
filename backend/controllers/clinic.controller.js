const express = require("express");
const router = express.Router();
const Clinic = require("../models/clinic.model");

router.get("/", async (req, res) => {
    const clinic = await Clinic.find().lean().exec();
    res.status(200).send({ clinic });
})

module.exports = router;