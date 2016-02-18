var express = require("express");
var falcorExpress = require('falcor-express');
var graphqlHTTP = require('express-graphql');

var Routers = require("./falcor-routers/routers");
var helloSchemas = require("./graphql-schemas/hello");

var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Routers();
}));

app.use('/graphql', graphqlHTTP({ schema: helloSchemas, graphiql: true }));

app.use(express.static("public"));
