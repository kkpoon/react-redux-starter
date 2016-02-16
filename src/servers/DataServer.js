/// <reference path="../../typings/main.d.ts"/>
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("public"));
app.listen(3000);
