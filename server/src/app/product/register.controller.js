var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('registerProduct'),
    Product = require("../models/product");
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
        Product.findOne()
            .where('id').equals(req.params.id)
            .select('id pName pWeight manufacturingDate pNumber')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Product not found'
                    });
                } else {
                    res.json({
                        product: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getProduct controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("getProduct controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};

exports.getProductList = function (req, res) {
    log.info("getProductList controller---------");
    try {
        Product.find()
            .select('id pName pWeight manufacturingDate')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Product list is empty'
                    });
                } else {
                    res.json({
                        success: "true",
                        list: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getProductList controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("getProductList controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};

exports.deleteProduct = function (req, res) {
    log.info("deleteProduct controller---------");
    try {
        Product.findAndRemove()
            .where('id').equals(req.params.id)
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Product not found'
                    });
                } else {
                    res.json({
                        result: true
                    });
                }
            })
            .catch(function (err) {
                log.error("deleteProduct controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("deleteProduct controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};