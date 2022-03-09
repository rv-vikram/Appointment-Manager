const express = require("express");
const cors = require("cors")
const app = express();
const doctorController = require("./controllers/doctor.controller");
const clinicController = require("./controllers/clinic.controller");
const specialityController = require("./controllers/speciality.controller");
require("./models/user.model");
require("./models/speciality.model");
require("./models/availibility.model")
require("./models/doctor.model");
require('./models/clinic.model')


app.use(express.json());
app.use(cors());

app.use("/doctor", doctorController);
app.use("/clinic", clinicController);
app.use("/speciality", specialityController);


module.exports = app;