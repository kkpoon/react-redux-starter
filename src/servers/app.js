import path from "path";
import express from "express";
import morgan from "morgan";
var falcorExpress = require('falcor-express');
var graphqlHTTP = require('express-graphql');

var FalcorRouter = require("./falcor-routers/router");
var helloSchemas = require("./graphql-schemas/hello");

const app = express();

app.use(morgan('tiny'))

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return new FalcorRouter();
}));

app.use('/graphql', graphqlHTTP({ schema: helloSchemas, graphiql: true }));

app.use(express.static("public"));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve('public', 'index.html'))
});

module.exports = app;
