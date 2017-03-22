var User = require("../models/user");
var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('login');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.authenticateUser = function (req, res) {
    log.info("login controller---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        User.findOne(req.body, function (err, user) {
            if (err) {
                log.error("login controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.mongoErr
                });
            } else {
                if (user) {
                    var token = jwt.sign(user, JWTCONFIG.secret_key);
                    res.json({
                        success: "true",
                        user: {
                            userName: user.userName,
                            token: token
                        }
                    });
                } else {
                    log.error("login controller---------", "User Not Found");
                    res.json({
                        errorMsg: "User Not Found"
                    });
                }
            }
        });
    } catch (e) {
        log.error("register controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}