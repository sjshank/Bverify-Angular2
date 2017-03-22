var User = require("../models/user");
var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('register');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");


exports.registerUser = function (req, res) {
    log.info("register controller---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        var user = new User(req.body);
        user.save(function (err, result) {
            if (err) {
                log.error("register controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.mongoErr
                });
            } else {
                var token = jwt.sign(result, JWTCONFIG.secret_key);
                res.json({
                    success: "true",
                    user: {
                        userName: result.userName,
                        token: token
                    }
                });
            }
        });
    } catch (e) {
        log.error("register controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}