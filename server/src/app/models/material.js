var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var materialSchema = new Schema({
    id: {
        type: Number
    },
    mName: {
        type: String
    },
    mNumber: {
        type: String
    },
    productionDate: {
        type: String,
        default: null
    },
    mWeight: {
        type: String
    },
    mColor: {
        type: String
    }
});

materialSchema.plugin(autoIncrement.plugin, {
    model: 'Material',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var Material = db.model('Material', materialSchema);

module.exports = Material;