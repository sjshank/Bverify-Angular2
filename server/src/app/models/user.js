var db = require('../middlewares/db'),
    Schema = db.Schema;

var userModel = new Schema({
    userName:{type:String},
    password:{type:String}
});

var user = db.model('userModel', userModel);

module.exports = user;
