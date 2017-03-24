const router = require("../middlewares/route-init"),
    registerController = require("./register.controller"),
    shipController = require("./ship.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('router');

router.route('')
    .get(function (req, res) {
        log.info("register route-----------");
        registerController.getMaterial(req, res);
    })

router.route('/list')
    .get(function (req, res) {
        log.info("register route-----------");
        registerController.getMaterialList(req, res);
    })

router.route('/register')
    .post(function (req, res) {
        log.info("register route-----------");
        registerController.registerMaterial(req, res);
    })

router.route('/ship')
    .post(function (req, res) {
        log.info("ship route-----------");
        shipController.shipMaterial(req, res);
    })

module.exports = router;