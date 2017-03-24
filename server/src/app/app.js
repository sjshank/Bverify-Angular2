const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./middlewares/app.config')(express, app);

const server = require('../../server')(app);

var verifyToken = require("./middlewares/token")

var userRouter = require("./user/router"),
    materialRouter = require("./material/router"),
    productRouter = require("./product/router"),
    uploadRouter = require("./upload/router");

app.use('/api/user', userRouter);
app.use('/api/material', verifyToken, materialRouter);
app.use('/api/product', verifyToken, productRouter);
app.use('/api/upload', verifyToken, uploadRouter);
