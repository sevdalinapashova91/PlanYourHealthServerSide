/* globals require module */

const config = require("./index");

const express = require("express");
//const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const data = require("../../data/index")(config);

let app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

require("../passport")(app, data);
require("../../routes")(app, data);

module.exports = app;