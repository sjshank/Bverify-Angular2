const router = require("../middlewares/route-init"),
    uploadController = require("./upload.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('router'),
    AWS = require("aws-sdk"),
    multer = require('multer'),
    AWSCONFIG = require('../config/aws.config');

//Configure for multer file upload
const dest = 'temp/images';

/*
*	Configuring multer for acessing form data and file name/upload in a specific destination.
*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dest)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
});

var upload = multer({ storage: storage });

//Configuring AWS account
AWS.config.update({
    accessKeyId: AWSCONFIG.AWS_ACCESSKEY,
    secretAccessKey: AWSCONFIG.AWS_SECRETACCESSKEY
});

//For InvalidRequest error
var s3 = new AWS.S3({
    endpoint: AWSCONFIG.S3_ENDPOINT,
    signatureVersion: AWSCONFIG.S3_VERSION,
    region: AWSCONFIG.S3_REGION
});


router.route('')
    .post(upload.single('file'), function (req, res) {
        log.info("upload route-----------");
        uploadController.uploadFile(req, res);
    });

module.exports = router;