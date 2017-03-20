const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./config/app.config');

const server = require('../../server')(app);
