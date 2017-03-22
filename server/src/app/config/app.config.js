const bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require("path"),
    log4js = require('log4js'),
    db = require('./db');
var log = log4js.getLogger("appConfig");

module.exports = function (express, app) {

    app.use(express.static('node_modules'));
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(function (req, res, next) {
        res.set('X-Powered-By', 'BVerify Web API');
        next();
    });

    var allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        next();
    }

    app.use(allowCrossDomain);

    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            log.error("unexpected error occur ", err);
            res.status(err.status || 500);
            res.json({
                errorMsg: "Currently we are experiencing technical difficulties. Please try after some time."
            });
        });
    }
}