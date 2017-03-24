var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('shipProduct');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.shipProduct = function (req, res) {
    log.info("shipProduct controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("shipProduct controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}