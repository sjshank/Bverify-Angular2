var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('registerProduct');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.registerProduct = function (req, res) {
    log.info("registerProduct controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("registerProduct controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}

exports.getProduct = function (req, res) {
    log.info("getProduct controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("getProduct controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}

exports.getProductList = function (req, res) {
    log.info("getProductList controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("getProductList controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}