"use strict";
var express = require('express');
var app = express();
app.use(express.json());
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
