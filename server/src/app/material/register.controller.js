var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    log = log4js.getLogger('login'),
    Material = require("../models/material");
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constant");

exports.registerMaterial = function (req, res) {
    log.info("registerMaterial controller---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        var material = new Material(req.body);
        material.save(function (err, result) {
            if (err) {
                log.error("register controller---------", err);
                res.json({
                    errorMsg: APPCONSTANT.mongoErr
                });
            } else {
                res.json({
                    success: "true",
                    id: result.id
                });
            }
        });
    } catch (e) {
        log.error("register controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};

exports.getMaterial = function (req, res) {
    log.info("getMaterial controller---------");
    try {
        Material.findOne()
            .where('id').equals(req.params.id)
            .select('id mName mWeight productionDate mNumber')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Material not found'
                    });
                } else {
                    res.json({
                        material: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getMaterial controller---------", e);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("getMaterial controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};

exports.getMaterialList = function (req, res) {
    log.info("getMaterialList controller---------");
    try {
        Material.find()
            .select('id mName mWeight productionDate')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Material list is empty'
                    });
                } else {
                    res.json({
                        success: "true",
                        list: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getMaterialList controller---------", e);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("getMaterialList controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};

exports.deleteMaterial = function (req, res) {
    log.info("deleteMaterial controller---------");
    try {
        Material.findAndRemove()
            .where('id').equals(req.params.id)
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Material not found'
                    });
                } else {
                    res.json({
                        result: true
                    });
                }
            })
            .catch(function (err) {
                log.error("deleteMaterial controller---------", e);
                res.json({
                    errorMsg: APPCONSTANT.serviceErr
                });
            })
    } catch (e) {
        log.error("deleteMaterial controller---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};