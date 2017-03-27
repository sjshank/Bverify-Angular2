const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./middlewares/app.config')(express, app);

const server = require('./server')(app);

var verifyToken = require("./middlewares/token");

var userRouter = require("./user/router");
var materialRouter = require("./material/router");
var productRouter = require("./product/router");
var uploadRouter = require("./upload/router");

app.use('/api', verifyToken, [materialRouter, productRouter, uploadRouter, userRouter]);