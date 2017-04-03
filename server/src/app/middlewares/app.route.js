var router = require("../middlewares/route-init"),
    loginController = require("../user/login.controller"),
    registerController = require("../user/register.controller"),
    registerMatController = require("../material/register.controller"),
    shipMatController = require("../material/ship.controller"),
    registerProdController = require("../product/register.controller"),
    shipProdController = require("../product/ship.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('router');


/*
*       Material Routing
 */


router.route('/material/list')
    .get(function (req, res) {
        log.info("registered material list route-----------");
        registerMatController.getMaterialList(req, res);
    });

router.route('/material/register')
    .post(function (req, res) {
        log.info("register route-----------");
        registerMatController.registerMaterial(req, res);
    });

router.route('/material/ship')
    .post(function (req, res) {
        log.info("ship route-----------");
        shipMatController.shipMaterial(req, res);
    });

router.route('/material/:id')
    .get(function (req, res) {
        log.info("register route-----------");
        registerMatController.getMaterial(req, res);
    });


/*
*       Product Routing
 */


router.route('/product/:id')
    .get(function (req, res) {
        log.info("product route-----------");
        registerProdController.getProduct(req, res);
    })

router.route('/product/list')
    .get(function (req, res) {
        log.info("product route-----------");
        registerProdController.getProductList(req, res);
    })

router.route('/product/register')
    .post(function (req, res) {
        log.info("product route-----------");
        registerProdController.registerProduct(req, res);
    })

router.route('/product/ship')
    .post(function (req, res) {
        log.info("product route-----------");
        shipProdController.shipProduct(req, res);
    })

module.exports = router;