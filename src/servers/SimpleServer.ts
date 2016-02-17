/// <reference path="../../typings/main.d.ts"/>

import express = require("express");
import morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.use(express.static("public"));

module.exports = app;
