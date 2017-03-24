var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('login');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.shipMaterial = function (req, res) {
    log.info("shipMaterial controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("shipMaterial controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}