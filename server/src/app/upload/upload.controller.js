var log4js = require('log4js'),
    log = log4js.getLogger('upload');
const APPCONSTANT = require("../config/app.constant");

exports.uploadFile = function (req, res) {
    log.info("uploadFile controller---------");
    try {
        res.json({sucess: true});
    } catch (e) {
        log.error("uploadFile controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
}
