const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./config/app.config')(express, app);

const server = require('../../server')(app);

var userRoute = require("./user/router");

app.use('/api/user', userRoute);
