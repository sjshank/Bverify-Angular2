const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./middlewares/app.config')(express, app);

const server = require('./server')(app);

var verifyToken = require("./middlewares/token");
var route = require("./middlewares/app.route");

var userRouter = require("./user/router");
var uploadRouter = require("./upload/router");

app.use('/api/user', userRouter);
app.use('/api/upload', uploadRouter);
app.use('/api', verifyToken, route);
