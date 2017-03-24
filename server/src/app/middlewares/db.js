/*
*	Configuring and creating mongodb connection using mongoose
*/

'use strict';

const mongoose = require('mongoose'),
        url = 'mongodb://127.0.0.1:27017/bverify',
        log4js = require('log4js'),
        debug = require('debug')('db'),
        log = log4js.getLogger('db');

mongoose.connect(url, _callback);

function _callback(err){
    log.debug("Mongodb connection callback");
        if(err){
            log.error("Unable to connect database " + err);
            process.exit(1);
        }else{
            console.log("Connection established !");
            log.info("Connection established !");
        }
};

module.exports = mongoose;