var User = require("../models/user");
var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    errorService = require('../middlewares/error.service'),
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
        User.findOne(req.body)
            .select('_id userName type')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Invalid Username or Password.'
                    });
                } else {
                    var token = jwt.sign(result, JWTCONFIG.secret_key);
                    res.json({
                        user: {
                            userName: result.userName,
                            type: result.type,
                            isAuthenticated: true,
                            token: token
                        }
                    });
                }
            })
            .catch(function (err) {
                console.log(err);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("login controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};