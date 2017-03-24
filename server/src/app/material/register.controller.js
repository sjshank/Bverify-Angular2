var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('login');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.registerMaterial = function (req, res) {
    log.info("registerMaterial controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("registerMaterial controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}

exports.getMaterial = function (req, res) {
    log.info("getMaterial controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("getMaterial controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}

exports.getMaterialList = function (req, res) {
    log.info("getMaterialList controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("getMaterialList controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}