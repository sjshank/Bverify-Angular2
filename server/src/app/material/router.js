var router = require("../middlewares/route-init"),
    registerController = require("./register.controller"),
    shipController = require("./ship.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('router');


router.route('/material/list')
    .get(function (req, res) {
        log.info("registered material list route-----------");
        registerController.getMaterialList(req, res);
    });

router.route('/material/register')
    .post(function (req, res) {
        log.info("register route-----------");
        registerController.registerMaterial(req, res);
    });

router.route('/material/ship')
    .post(function (req, res) {
        log.info("ship route-----------");
        shipController.shipMaterial(req, res);
    });

router.route('')
    .get(function (req, res) {
        log.info("register route-----------");
        registerController.getMaterial(req, res);
    });


module.exports = router;