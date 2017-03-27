var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var userSchema = new Schema({
    id: {
        type: Number
    },
    userName: {
        type: String
    },
    password: {
        type: String
    }
});

userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var User = db.model('User', userSchema);

module.exports = User;