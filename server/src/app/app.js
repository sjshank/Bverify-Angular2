const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./middlewares/app.config')(express, app);

const server = require('./server')(app);

var verifyToken = require("./middlewares/token");
var route = require("./middlewares/app.route");

var userRouter = require("./user/router");

app.use('/api/user', userRouter);
//app.use('/api', verifyToken, route);
app.use('/api', route);