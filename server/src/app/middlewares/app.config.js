const bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require("path"),
    log4js = require('log4js'),
    db = require('./db'),
    autoReap = require('multer-autoreap'),
    cors = require('cors');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    }

    app.use(allowCrossDomain);
    //app.use(autoReap);
    //enable pre-flight.
    //enable all cors request.
   // app.use(cors());


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