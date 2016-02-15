var express = require("express");
var falcorExpress = require('falcor-express');
var Routers = require("./falcor-routers/routers");

var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Routers();
}));

app.use(express.static("public"));

app.listen(3000);
