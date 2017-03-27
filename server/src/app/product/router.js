const router = require("../middlewares/route-init"),
    registerController = require("./register.controller"),
    shipController = require("./ship.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('router');

router.route('')
    .get(function (req, res) {
        log.info("product route-----------");
        registerController.getProduct(req, res);
    })

router.route('/product/list')
    .get(function (req, res) {
        log.info("product route-----------");
        registerController.getProductList(req, res);
    })

router.route('/product/register')
    .post(function (req, res) {
        log.info("product route-----------");
        registerController.registerProduct(req, res);
    })

router.route('/product/ship')
    .post(function (req, res) {
        log.info("product route-----------");
        shipController.shipProduct(req, res);
    })

module.exports = router;